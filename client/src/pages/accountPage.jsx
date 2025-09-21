import React, { useState, useEffect } from "react";
import axios from "axios";

function AccountPage() {
  const [accounts, setAccounts] = useState([]);
  const [name, setName] = useState("");
  const [balance, setBalance] = useState("");
  const [type, setType] = useState("");

  // Fetch accounts from backend
  useEffect(() => {
    axios.get("/api/accounts")
      .then(res => setAccounts(res.data))
      .catch(err => console.error(err));
  }, []);

  // Submit new accountq
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/accounts", {
        name,
        balance,
        type,
      });
      setAccounts([...accounts, res.data]); // update UI
      setName("");
      setBalance("");
      setType("");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <h2>Add Account</h2>
        <input
          type="text"
          placeholder="Account Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Balance"
          value={balance}
          onChange={(e) => setBalance(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Type (e.g., Savings, Current)"
          value={type}
          onChange={(e) => setType(e.target.value)}
          required
        />
        <button type="submit">Add Account</button>
      </form>

      <div style={{ marginTop: "30px", width: "100%", maxWidth: "600px" }}>
        <h3>All Accounts</h3>
        <table border="1" cellPadding="10" width="100%">
          <thead>
            <tr>
              <th>Name</th>
              <th>Balance</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
            {accounts.map((acc, idx) => (
              <tr key={idx}>
                <td>{acc.name}</td>
                <td>{acc.balance}</td>
                <td>{acc.type}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AccountPage;
