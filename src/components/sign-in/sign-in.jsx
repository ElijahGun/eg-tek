import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase";
import SignUp from "../sign-up/sign-up";
import "./sign-in.scss";
import Button from "../button/button";
import { useState } from "react";

const defaultUser = {
  email: "",
  password: "",
};

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  const [userInfo, setUserInfo] = useState(defaultUser);
  const { email, password } = userInfo;

  const resetForm = () => {
    setUserInfo(defaultUser);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await signInAuthUserWithEmailAndPassword(email, password);
      console.log(res);
      resetForm();
    } catch (error) {
      if (error.code === "auth/wrong-password") {
        alert("Sorry! Incorrect Password");
      }
      resetForm()
      console.log(error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  return (
    <div className="sign-container">
      <div className="sign-in">
        <h1 className="sign__heading">Have An Account?</h1>
        <p>Sign in with Email & Password</p>
        <form onSubmit={handleSubmit}>
          <div className="inputs">
            <input
              className="form-input"
              type="email"
              required
              name="email"
              id="email"
              onChange={handleChange}
              value={email}
            />
            <label className="form-input--label" htmlFor="email">
              Email
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
              Password
            </label>
          </div>
          <Button type="submit" displayText="Sign in with Email"  />
        </form>
        <Button
          type="button"
          onClick={logGoogleUser}
          className="google-btn"
          displayText={"Sign in with Google"}
        />
      </div>
      <SignUp />
    </div>
  );
};

export default SignIn;
