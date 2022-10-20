

import { signInWithGooglePopup, signInWithGoogleRedirect, createUserDocumentFromAuth } from "../../utils/firebase/firebase";
import SignUp from "../sign-up/sign-up";
import './sign-in.scss';

const SignIn = () => {

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user)
  };


  return (
    <div className="sign-container">
      <div className="sign-in">
      <h1>Have An Account?</h1>
      <input className="form-input" type='email' required name='email' id='email'  />
      <label htmlFor="email">Email</label>
      <input className="form-input" type='password' name='password' id='password'/>
      <label htmlFor="password">Password</label>
      <button onClick={logGoogleUser}>Sign in with Google</button>
      </div>
      <SignUp />
    </div>
  );
};

export default SignIn;
