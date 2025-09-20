import React, { useState, useEffect } from "react";
import axios from "axios";

function CategoryPage() {
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  // Fetch categories from backend
  useEffect(() => {
    axios.get("http://localhost:1337/api/categories")
      .then(res => setCategories(res.data))
      .catch(err => console.error(err));
  }, []);

  // Submit new category
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:1337/api/categories", {
        name,
        description,
      });
      setCategories([...categories, res.data]); // update UI
      setName("");
      setDescription("");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <h2>Add Category</h2>
        <input
          type="text"
          placeholder="Category Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <button type="submit">Add Category</button>
      </form>

      <div style={{ marginTop: "30px", width: "100%", maxWidth: "600px" }}>
        <h3>All Categories</h3>
        <table border="1" cellPadding="10" width="100%">
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((cat, idx) => (
              <tr key={idx}>
                <td>{cat.name}</td>
                <td>{cat.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CategoryPage;
