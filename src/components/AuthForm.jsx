import React, { useState } from "react";
import '../assets/styles/auth.css';

const AuthForm = ({ title, buttonText, onSubmit, linkText, linkTo, linkAction, linkLabel }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setError("");
    onSubmit(email, password);
  };
  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2 className="auth-h2">{title}</h2>
        <form onSubmit={handleSubmit} className="auth-form">
          <input
            className="auth-input"
            type="text"
            placeholder="أدخل بريدك الإلكتروني"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            className="auth-input"
            type="password"
            placeholder="أدخل كلمة المرور"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {error && <p className="error-message">{error}</p>}
          <button className="auth-button" type="submit">{buttonText}</button>
        </form>
        <p className="auth-p">
  {linkText}{" "}
  <a
    href={linkTo}
    onClick={(e) => {
      e.preventDefault();
      if (typeof linkAction === "function") {
        linkAction();
      }
    }}
  >
    {linkLabel || "اضغط هنا"}
  </a>
</p>


      </div>
    </div>
  );
};

export default AuthForm;
