import { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase";

import "./sign-up.scss";
import Button from "../button/button";

const defaultUser = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUp = () => {
  const [userInfo, setUserInfo] = useState(defaultUser);
  const { displayName, email, password, confirmPassword } = userInfo;

  const resetForm = () => {
    setUserInfo(defaultUser);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("passwords do not match");
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(email, password);
      await createUserDocumentFromAuth(user, { displayName });
      console.log("success!", user);
      resetForm();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Cannot create user, email already in use");
      } else {
        console.log("Error creating user", error);
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  return (
    <div className="sign-up-container">
      <h2 className="sign__heading">New User?</h2>
      <p>Sign up with Email & Password</p>
      <form onSubmit={handleSubmit}>
        <div className="inputs">
          <input
            className="form-input"
            type="text"
            name="displayName"
            id="displayName"
            onChange={handleChange}
            value={displayName}
          />
          <label className="form-input--label" htmlFor="displayName">
            displayName
          </label>
          <input
            className="form-input"
            type="email"
            name="email"
            id="email"
            onChange={handleChange}
            value={email}
          />
          <label className="form-input--label" htmlFor="email">
            email
          </label>
          <input
            className="form-input"
            type="password"
            name="password"
            id="password"
            onChange={handleChange}
            value={password}
          />
          <label className="form-input--label" htmlFor="password">
            password
          </label>
          <input
            className="form-input"
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            onChange={handleChange}
            value={confirmPassword}
          />
          <label htmlFor="confirmPassword">Confirm Password</label>
        </div>
        <Button displayText={"Sign Up"} />
      </form>
    </div>
  );
};

export default SignUp;
