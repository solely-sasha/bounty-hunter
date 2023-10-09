import React, { useState } from "react";
import "./BountyForm.css";

export default function BountyForm({ addBounty }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    living: true,
    amount: 0,
    type: "",
  });

  function handleChange(e) {
    const { name, value, checked } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
      checked,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (formData.firstName && formData.lastName && formData.amount) {
      addBounty(formData);
    }
    setFormData({
      firstName: "",
      lastName: "",
      living: true,
      amount: "",
      type: "Sith",
    });
  }

  return (
    <main className="bounty-form ">
      <h2 className="">People to Kill</h2>
      <div className="">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="First Name"
            required
          />
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Last Name"
            required
          />
          <label for="living">Living:</label>
          <input
            type="checkbox"
            name="living"
            checked={formData.living}
            onChange={handleChange}
            className=""
          />
          <input
            type="number"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            placeholder="Bounty Amount"
            className=""
            required
          />
          <select
            name="type"
            value={formData.type}
            onChange={handleChange}
            className=""
          >
            <option value="Sith">Sith</option>
            <option value="Jedi">Jedi</option>
          </select>
          <button type="submit">Add</button>
        </form>
      </div>
    </main>
  );
}
