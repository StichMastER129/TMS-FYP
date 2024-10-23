"use client";

import React, { useState, FormEvent } from "react";

interface Errors {
  fullName?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
}

export default function Register() {
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState<Errors>({});

  const validateForm = (): boolean => {
    const newErrors: Errors = {};

    // Full Name validation
    if (!/^[A-Za-z\s]*$/.test(fullName) || fullName.length > 25) {
      newErrors.fullName = "Name must contain only letters and be max 25 characters.";
    }

    // Email validation
    if (!/\S+@\S+\.\S+/.test(email) || email.length > 50) {
      newErrors.email = "Enter a valid email (max 50 characters).";
    }

    // Password validation
    if (password.length < 6 || password.length > 50) {
      newErrors.password = "Password must be between 6 and 50 characters.";
    }

    // Confirm Password validation
    if (password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Registration Successful!", {
        fullName,
        phoneNumber,
        email,
        address,
        username,
        password,
      });
    }
  };

  return (
    <div>
      <div className="screenMiddleDiv">
        <div className="formDiv">
          <form onSubmit={handleSubmit}>
            <h2 className="text-center">Register</h2>

            <div>
              <label className="formLabel">Full Name</label>
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
              />
              {errors.fullName && <p style={{ color: "red" }}>{errors.fullName}</p>}
            </div>

            <div>
              <label className="formLabel">Phone Number</label>
              <input
                type="tel"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
              />
            </div>

            <div>
              <label className="formLabel">Email Address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
            </div>

            <div>
              <label className="formLabel">Address</label>
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
              />
            </div>

            <div>
              <label className="formLabel">Username</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>

            <div>
              <label className="formLabel">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
            </div>

            <div>
              <label className="formLabel">Confirm Password</label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
              {errors.confirmPassword && (
                <p style={{ color: "red" }}>{errors.confirmPassword}</p>
              )}
            </div>

            <button type="submit" className="formButton">
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}