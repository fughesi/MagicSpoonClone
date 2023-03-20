import { useState } from "react";
import { useRegisterUsersMutation } from "../../services/usersApi";
import "./Register.css";

export default function Register() {
  const [registerUsers, { isLoading }] = useRegisterUsersMutation();

  const [loginData, setLoginData] = useState({
    title: "",
    username: "",
    firstName: "",
    lastName: "",
    role: "",
    active: true,
    language: [],
    email: "",
    phoneNumber: "",
    password: "",
  });

  const updateFormData = (e) => {
    const { name, value } = e.target;

    if (name === "active") return (loginData.active = !loginData.active);

    if (name === "language") return loginData.language.push(value);

    setLoginData((i) => ({
      ...i,
      [name]: value,
    }));
  };

  console.log(loginData);
  const submitRegistration = async () => {
    if (!isLoading) {
      try {
        await registerUsers(loginData).unwrap();
      } catch (error) {
        console.log("failed to save the registration");
      }
    }
  };

  return (
    <div>
      <form className="registrationForm" onSubmit={(e) => (e.preventDefault(), submitRegistration)}>
        <input
          type="text"
          name="title"
          placeholder="title"
          value={loginData.title}
          onChange={(e) => updateFormData(e)}
        />
        <input
          type="text"
          name="username"
          placeholder="username"
          value={loginData.username}
          onChange={(e) => updateFormData(e)}
        />
        <input
          type="text"
          name="firstName"
          placeholder="firstName"
          value={loginData.firstName}
          onChange={(e) => updateFormData(e)}
        />
        <input
          type="text"
          name="lastName"
          placeholder="lastName"
          value={loginData.lastName}
          onChange={(e) => updateFormData(e)}
        />
        <input type="text" name="role" placeholder="role" value={loginData.role} onChange={(e) => updateFormData(e)} />
        <label htmlFor=""></label>
        <input
          type="radio"
          name="active"
          placeholder="active"
          value={loginData.active}
          onChange={(e) => updateFormData(e)}
        />
        <input
          type="text"
          name="language"
          placeholder="language"
          value={loginData.language}
          onChange={(e) => updateFormData(e)}
        />
        <input
          type="email"
          name="email"
          placeholder="email"
          value={loginData.email}
          onChange={(e) => updateFormData(e)}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          value={loginData.password}
          onChange={(e) => updateFormData(e)}
        />
        <input type="submit" />
      </form>
    </div>
  );
}
