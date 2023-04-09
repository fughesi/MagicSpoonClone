import { useState } from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "../features/authSlice";

export default function TestingDELETEthis() {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    title: "",
    username: "",
    firstName: "",
    lastName: "",
    age: "",
    language: "",
    email: "",
    phoneNumber: "",
    homeAddress: {
      number: "",
      street: "",
      city: "",
      state: "",
      zipCode: "",
    },
    shippingAddress: {
      number: "",
      street: "",
      city: "",
      state: "",
      zipCode: "",
    },
    password: "",
    confirmPassword: "",
  });

  const changeVal = (e) => {
    const { name, value } = e.target;

    setFormData((i) => ({
      ...i,
      [name]: value,
    }));
  };

  console.log(formData);
  return (
    <>
      <form onSubmit={(e) => (e.preventDefault(), dispatch(registerUser(formData)))}>
        <label htmlFor="username">
          *
          <input
            id="username"
            type="text"
            placeholder="username"
            required
            name="username"
            value={formData.username}
            onChange={(e) => changeVal(e)}
          />
        </label>
        <br />
        <label htmlFor="title">
          <input
            id="title"
            type="text"
            placeholder="title"
            required
            name="title"
            value={formData.title}
            onChange={(e) => changeVal(e)}
          />
        </label>

        <br />
        <label htmlFor="firstName">
          *
          <input
            id="firstName"
            type="text"
            placeholder="firstName"
            required
            name="firstName"
            value={formData.firstName}
            onChange={(e) => changeVal(e)}
          />
        </label>
        <label htmlFor="age">
          *
          <input
            id="age"
            type="number"
            placeholder="age"
            required
            name="age"
            value={formData.age}
            onChange={(e) => changeVal(e)}
          />
        </label>
        <br />

        <label htmlFor="lastName">
          *
          <input
            id="lastName"
            type="text"
            placeholder="lastName"
            required
            name="lastName"
            value={formData.lastName}
            onChange={(e) => changeVal(e)}
          />
        </label>
        <br />

        <label htmlFor="language">
          <input
            id="language"
            type="text"
            placeholder="language"
            required
            name="language"
            value={formData.language}
            onChange={(e) => changeVal(e)}
          />
        </label>
        <br />

        <label htmlFor="email">
          *
          <input
            id="email"
            type="email"
            placeholder="email"
            required
            name="email"
            value={formData.email}
            onChange={(e) => changeVal(e)}
          />
        </label>
        <br />

        <label htmlFor="phoneNumber">
          <input
            id="phoneNumber"
            type="number"
            placeholder="phoneNumber"
            required
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={(e) => changeVal(e)}
          />
        </label>
        <br />

        <label htmlFor="password">
          *
          <input
            id="password"
            type="password"
            placeholder="password"
            required
            name="password"
            value={formData.password}
            onChange={(e) => changeVal(e)}
          />
        </label>
        <br />

        <label htmlFor="confirmPassword">
          *
          <input
            id="confirmPassword"
            type="password"
            placeholder="confirmPassword"
            required
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={(e) => changeVal(e)}
          />
        </label>
        <br />

        <br />
        <input type="submit" value="SUBMIT" />
      </form>
    </>
  );
}
