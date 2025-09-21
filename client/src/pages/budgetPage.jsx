import React, { useState, useEffect } from "react";
import axios from "axios";

function BudgetPage() {
  const [budgets, setBudgets] = useState([]);
  const [name, setName] = useState("");
  const [limit, setLimit] = useState("");
  const [period, setPeriod] = useState("");

  // Fetch budgets from backend
  useEffect(() => {
    axios.get("http://localhost:1337/api/budgets")
      .then(res => setBudgets(res.data))
      .catch(err => console.error(err));
  }, []);

  // Submit new budget
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:1337/api/budgets", {
        name,
        limit,
        period,
      });
      setBudgets([...budgets, res.data]); // update UI
      setName("");
      setLimit("");
      setPeriod("");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <h2>Add Budget</h2>
        <input
          type="text"
          placeholder="Budget Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Limit"
          value={limit}
          onChange={(e) => setLimit(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Period (e.g., Monthly, Yearly)"
          value={period}
          onChange={(e) => setPeriod(e.target.value)}
          required
        />
        <button type="submit">Add Budget</button>
      </form>

      <div style={{ marginTop: "30px", width: "100%", maxWidth: "600px" }}>
        <h3>All Budgets</h3>
        <table border="1" cellPadding="10" width="100%">
          <thead>
            <tr>
              <th>Name</th>
              <th>Limit</th>
              <th>Period</th>
            </tr>
          </thead>
          <tbody>
            {budgets.map((bgt, idx) => (
              <tr key={idx}>
                <td>{bgt.name}</td>
                <td>{bgt.limit}</td>
                <td>{bgt.period}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default BudgetPage;
