import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./Eligibility.css";

const Eligibility = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    age: "",
    location: "",
    gender: "",
    occupation: "",
    caste: "",
    income: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/submit-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        navigate("/schemes", { state: { age: formData.age, gender: formData.gender, occupation: formData.occupation, caste: formData.caste, income: formData.income } }); // Pass age and income to Schemes component
      } else {
        const errorData = await response.json();
        console.error("Error from response:", errorData);
        navigate("/schemes", { state: { age: formData.age, gender: formData.gender, occupation: formData.occupation, caste: formData.caste, income: formData.income } }); // Pass age and income to Schemes component
        // alert("Error: " + JSON.stringify(errorData));
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      navigate("/schemes", { state: { age: formData.age, gender: formData.gender, occupation: formData.occupation, caste: formData.caste, income: formData.income } }); // Pass age and income to Schemes component
      // alert("Failed to submit form. Please try again later.");
    }
  };

  return (
    <div className="eligibility-form-container">
      <div className="eligibility-form">
        <h2>Check Eligibility</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Age:</label>
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Location:</label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Gender:</label>
            <select name="gender" value={formData.gender} onChange={handleChange} required>
              <option value="">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div className="form-group">
            <label>Occupation:</label>
            <select name="occupation" value={formData.occupation} onChange={handleChange} required>
              <option value="">Select</option>
              <option value="Student">Student</option>
              <option value="Farmer">Farmer</option>
              <option value="Employed">Employed</option>
              <option value="Unemployed">Unemployed</option>
              <option value="Self-employed">Self-employed</option>
            </select>
          </div>
          <div className="form-group">
            <label>Caste:</label>
            <select name="caste" value={formData.caste} onChange={handleChange} required>
              <option value="">Select</option>
              <option value="BC">BC</option>
              <option value="OBC">OBC</option>
              <option value="SC">SC</option>
              <option value="ST">ST</option>
            </select>
          </div>
          <div className="form-group">
            <label>Income:</label>
            <input
              type="number"
              name="income"
              value={formData.income}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-actions">
            <button type="submit" className="btn-submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Eligibility;
