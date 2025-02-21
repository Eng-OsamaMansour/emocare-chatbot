import React from "react";
import { useNavigate } from "react-router-dom";
import AuthForm from "../../components/AuthForm";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (email, password) => {
    console.log("Logging in with:", email, password);
    navigate("/chat");
  };

  return (
    <AuthForm
      title="😊اهلا بك مجددا"
      buttonText="تسجبيل الدخول"
      onSubmit={handleLogin}
      linkText="ليس لديك حساب؟"
      linkTo="/signup"
      linkAction={() => navigate("/signup")}
      linkLabel="إنشاء حساب"
    />
  );
};

export default Login;
