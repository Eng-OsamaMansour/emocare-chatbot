import React from "react";
import { useNavigate } from "react-router-dom";
import SignForm from "../../components/SignUp";
import { signup } from "../../services/api";

const Signup = () => {
  const navigate = useNavigate();

  const handleSignup = async (email, password, username, address, phone, firstName, lastName, dateOfBirth, gender, role) => {
    console.log("Signing up with:", email, password, username, address, phone, firstName, lastName, dateOfBirth, gender, role = "PATIENT", gender = "MALE");
    try {
      const response = await signup({email, password, username, address, phone, firstName, lastName, dateOfBirth, gender, role});
      console.log('Sign-up successful', response);
      navigate("/login");
    }
    catch(error) {
      console.log(error);
    }
  };

  return (
    <SignForm
      title="انشاء حساب "
      buttonText=" انشاء"
      onSubmit={handleSignup}
      linkText="لدي حساب ؟"
      linkTo="/login"
      linkAction={() => navigate("/login")}
      additionalFields={[
        { name: "username", label: "Username" },
        { name: "address", label: "Address" },
        { name: "phone", label: "Phone" },
        { name: "firstName", label: "First Name" },
        { name: "lastName", label: "Last Name" },
        { name: "dateOfBirth", label: "Date of Birth" },
        { name: "gender", label: "Gender" },
        { name: "role", label: "Role" }
      ]}
    />
  );
};

export default Signup;
