import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    destination: "",
    studyLevel: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Submission received!");
    console.log("Form Data:", formData);
  };

  return (
    <div className="contact-container">
      <div className="contact-header">
        <h2>Get FREE Counselling Today! </h2>

        <p>
          Enter your details and our expert will reach out to you to discuss
          your plans.
        </p>
      </div>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>First Name *</label>
          <input
            type="text"
            name="firstName"
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Last Name * </label>
          <input type="text" name="lastName" onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Email address *</label>
          <input type="email" name="email" onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Mobile number * </label>
          <input type="tel" name="mobile" onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Preferred Study destination* </label>
          <input
            type="text"
            name="destination"
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Preferred study level * </label>
          <input
            type="text"
            name="studyLevel"
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="submit-btn">
          submit your application
        </button>
      </form>
    </div>
  );
};

export default Contact;
