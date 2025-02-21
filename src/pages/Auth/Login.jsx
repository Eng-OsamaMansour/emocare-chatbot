import React from "react";
import { useNavigate } from "react-router-dom";
import AuthForm from "../../components/AuthForm";
import { signin } from "../../services/api";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = async (useraname, password) => {
    console.log("Logging in with:", useraname, password);
    try {
      const response = await signin(useraname, password);
      console.log('Sign-in successful', response);
      navigate("/chat");
    }
    catch(error) {
      console.log(error);
    }
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
