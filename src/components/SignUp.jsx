import React, { useState } from "react";
import '../assets/styles/sign.css';

const SignForm = ({ title, buttonText, onSubmit, linkText, linkTo, linkAction }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [dateOfBirth, setdateOfBirth] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email.includes("@") || password.length < 6) {
            setError("بريد إلكتروني غير صالح أو كلمة مرور (6 أحرف على الأقل)");
            return;
        }
        setError("");
        onSubmit(email, password,username,address,phone,firstName,lastName,dateOfBirth);
    };

    return (
        <div className="sign-container">
            <div className="sign-box">
                <h2 className="sign-h2">{title}</h2>
                <form onSubmit={handleSubmit} className="sign-form">
                    <input
                        className="sign-input"
                        type="text"
                        placeholder="الاسم الأول"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                    />
                    <input
                        className="sign-input"
                        type="text"
                        placeholder="اسم العائلة"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        required
                    />
                    <input
                        className="sign-input"
                        type="text"
                        placeholder="اسم المستخدم"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                    <input
                        className="sign-input"
                        type="email"
                        placeholder="البريد الإلكتروني"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input
                        className="sign-input"
                        type="password"
                        placeholder="كلمة المرور"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <input
                        className="sign-input"
                        type="text"
                        placeholder="العنوان"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        required
                    />
                    <input
                        className="sign-input"
                        type="tel"
                        placeholder="الهاتف"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                    />
                    <input
                        className="sign-input"
                        type="date"
                        placeholder="تاريخ الميلاد"
                        value={dateOfBirth}
                        onChange={(e) => setdateOfBirth(e.target.value)}
                        required
                    />
                    {error && <p className="error-message">{error}</p>}
                    <button className="sign-button" type="submit">{buttonText}</button>
                </form>
                <p className="sign-p">
                    {linkText}  
                    <a href={linkTo} onClick={(e) => { e.preventDefault(); if (linkAction) linkAction(); }}>
                        اضغط هنا
                    </a>
                </p>
            </div>
        </div>
    );
};

export default SignForm;
