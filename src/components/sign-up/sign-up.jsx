import { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase";


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
      console.log('success!', user)
      resetForm();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Cannot create user, email already in use");
      } else {
        console.log('Error creating user', error);
      }

    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  return (
    <div>
      <h2>New User?</h2>
      <p>Sign up with Email & Password</p>
      <form onSubmit={handleSubmit}>
        <input className="form-input" type="text" name="displayName" id="displayName" onChange={handleChange} />
        <label htmlFor="displayName">displayName</label>
        <input className="form-input" type="email" name="email" id="email" onChange={handleChange} />
        <label htmlFor="email">email</label>
        <input className="form-input" type="password" name="password" id="password" onChange={handleChange} />
        <label htmlFor="password">password</label>
        <input className="form-input"
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          onChange={handleChange}
        />
        <label htmlFor="confirmPassword">Confirm Password</label>
        <button>Register</button>
      </form>
    </div>
  );
};

export default SignUp;
