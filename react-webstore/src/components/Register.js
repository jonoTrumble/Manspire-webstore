// components/Register.js
import React, { useState } from 'react';

const Register = ({ setLoggedInUser }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    const { firstName, lastName, username, email, password } = formData;

    // First Name validation (must not be empty and contain only letters)
    if (!firstName || !/^[A-Za-z]+$/.test(firstName)) {
      newErrors.firstName = "Please enter a valid first name (letters only)";
    }

    // Last Name validation (must not be empty and contain only letters)
    if (!lastName || !/^[A-Za-z]+$/.test(lastName)) {
      newErrors.lastName = "Please enter a valid last name (letters only)";
    }

    // Username validation (must be at least 3 characters long, alphanumeric)
    if (username.length < 3 || !/^[a-zA-Z0-9]+$/.test(username)) {
      newErrors.username = "Username must be at least 3 characters and alphanumeric";
    }

    // Email validation
    if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Password validation (must be at least 6 characters, include upper, number, special)
    if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters long";
    } else if (!/[A-Z]/.test(password)) {
      newErrors.password = "Password must contain at least one uppercase letter";
    } else if (!/\d/.test(password)) {
      newErrors.password = "Password must contain at least one number";
    } else if (!/[!@#$%^&*]/.test(password)) {
      newErrors.password = "Password must contain at least one special character (!@#$%^&*)";
    }

    return newErrors;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length === 0) {
      setLoggedInUser(formData.username);
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className="container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="firstName" className="form-label">First Name</label>
          <input
            type="text"
            className="form-control"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          {errors.firstName && <p className="text-danger">{errors.firstName}</p>}
        </div>
        <div className="mb-3">
          <label htmlFor="lastName" className="form-label">Last Name</label>
          <input
            type="text"
            className="form-control"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
          {errors.lastName && <p className="text-danger">{errors.lastName}</p>}
        </div>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">Username</label>
          <input
            type="text"
            className="form-control"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
          {errors.username && <p className="text-danger">{errors.username}</p>}
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          {errors.email && <p className="text-danger">{errors.email}</p>}
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          {errors.password && <p className="text-danger">{errors.password}</p>}
        </div>
        <button type="submit" className="btn btn-primary">Register</button>
      </form>
    </div>
  );
};

export default Register;
