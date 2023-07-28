import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const Login = (props) => {
  const url = process.env.URL || "http://localhost:5000";
    const [credentials, setCredentials] = useState({ email: "", password: "" });
    let navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`https://inotebook-24wn.onrender.com/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });
    const json = await response.json();
      //console.log(json);
      if (json.success) {
          //redirect to
          localStorage.setItem('token', json.authtoken);
          props.showAlert("Logged in Successfully", "success");
          navigate("/");
      }
      else {
          props.showAlert("Invalid Details","danger")
      }
  };
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  return (
    <div className="mt-2">
      <h2>Login to continue to iNotebook</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            value={credentials.email}
            onChange={onChange}
            type="email"
            className="form-control"
            name="email"
            id="email"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            value={credentials.password}
            onChange={onChange}
            type="password"
            className="form-control"
            id="password"
            name="password"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
