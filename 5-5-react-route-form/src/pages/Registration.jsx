import { useState } from "react";

export default function Registration() {
  // 1) Add new state variables at the top for password and gender
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // 4) Build an errors object and check each field
    const nextErrors = {};

    // Email validation
    if (!email.trim()) nextErrors.email = "Email is required";
    else if (!(email.includes("@") && email.endsWith(".com")))
      nextErrors.email = "Enter a valid email address";

    // Password validation
    if (!password.trim()) nextErrors.password = "Password is required";

    // Gender validation
    if (!gender) nextErrors.gender = "Please select your gender";

    setErrors(nextErrors);
    
    // Stop form submit if errors exist
    if (Object.keys(nextErrors).length > 0) return; 

    // 7) SUCCESS ALERT: Show only when there are no errors
    alert(`User Registered: ${email}`);
  };

  return (
    <div className="page">
      <h2>Registration</h2>
      <form onSubmit={handleSubmit} className="form">
        
        <div className="form-row">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {/* 5) Show small <p className="error"> under invalid input */}
          {errors.email && <p className="error">{errors.email}</p>}
        </div>

        {/* 2) Create a password field */}
        <div className="form-row">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && <p className="error">{errors.password}</p>}
        </div>

        {/* 3) Add gender selection (radio inputs) */}
        <fieldset className="form-row">
          <legend>Gender</legend>
          <label className="radio">
            <input
              type="radio"
              name="gender"
              value="male"
              checked={gender === "male"}
              onChange={(e) => setGender(e.target.value)}
            /> Male
          </label>
          <label className="radio">
            <input
              type="radio"
              name="gender"
              value="female"
              checked={gender === "female"}
              onChange={(e) => setGender(e.target.value)}
            /> Female
          </label>
          {errors.gender && <p className="error">{errors.gender}</p>}
        </fieldset>

        {/* 6) Disable the "Register" button until all fields are filled */}
        <button type="submit" disabled={!email || !password || !gender}>
          Register
        </button>
        
      </form>
    </div>
  );
}