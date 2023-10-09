import React, { useState } from "react";
import "./BountyList.css";

export default function BountyList({ bounty, onEdit, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    firstName: bounty.firstName,
    lastName: bounty.lastName,
    living: bounty.living,
    amount: bounty.amount,
    type: bounty.type,
  });

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSaveClick = () => {
    onEdit(bounty._id, formData);
    setIsEditing(false);
  };

  return (
    <div className="bounty-item">
      <div className="">
        <span className="">{bounty.living ? "🖤 KILL" : "💀 DEAD"}</span>
        <div>
          {isEditing ? (
            <>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                placeholder="First Name"
                className=""
                required
              />
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                placeholder="Last Name"
                className=""
                required
              />
              <label className="">Living</label>
              <input
                type="checkbox"
                name="living"
                checked={formData.living}
                onChange={handleInputChange}
                className=""
              />
              <input
                type="number"
                name="amount"
                value={formData.amount}
                onChange={handleInputChange}
                placeholder="Bounty Amount"
                className=""
                required
              />
              <select
                name="type"
                value={formData.type}
                onChange={handleInputChange}
                className=""
              >
                <option value="Sith">Sith</option>
                <option value="Jedi">Jedi</option>
              </select>
            </>
          ) : (
            <>
              <h2 className="">
                {bounty.firstName} {bounty.lastName}
              </h2>
              <p className="">Type: {bounty.type}</p>
              <p className="">Amount: ${bounty.amount}</p>
            </>
          )}
        </div>
      </div>
      <div className="">
        {isEditing ? (
          <button onClick={handleSaveClick} className="">
            Save Changes
          </button>
        ) : (
          <button onClick={handleEditClick} className="">
            Edit
          </button>
        )}
        <button onClick={() => onDelete(bounty._id)} className="">
          Delete
        </button>
      </div>
    </div>
  );
}
