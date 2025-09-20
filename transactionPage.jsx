import React, { useState, useEffect } from "react";
import axios from "axios";

function TransactionPage() {
  const [transactions, setTransactions] = useState([]);
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("income");
  const [date, setDate] = useState("");

  // Fetch transactions
  useEffect(() => {
    axios.get("http://localhost:1337/api/transactions")
      .then(res => setTransactions(res.data))
      .catch(err => console.error(err));
  }, []);

  // Submit new transaction
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:1337/api/transactions", {
        title,
        amount,
        type,
        date,
      });
      setTransactions([...transactions, res.data]);
      setTitle("");
      setAmount("");
      setType("income");
      setDate("");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <h2>Add Transaction</h2>
        <input
          type="text"
          placeholder="Transaction Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
        <select value={type} onChange={(e) => setType(e.target.value)} required>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
        <button type="submit">Add Transaction</button>
      </form>

      <div style={{ marginTop: "30px", width: "100%", maxWidth: "800px" }}>
        <h3>All Transactions</h3>
        <table border="1" cellPadding="10" width="100%">
          <thead>
            <tr>
              <th>Title</th>
              <th>Amount</th>
              <th>Type</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((t, idx) => (
              <tr key={idx}>
                <td>{t.title}</td>
                <td>{t.amount}</td>
                <td>{t.type}</td>
                <td>{t.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TransactionPage;
