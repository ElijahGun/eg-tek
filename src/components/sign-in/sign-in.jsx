

import { signInWithGooglePopup, signInWithGoogleRedirect, createUserDocumentFromAuth } from "../../utils/firebase/firebase";
import SignUp from "../sign-up/sign-up";
import Input from "../input/input";
import './sign-in.scss';

const SignIn = () => {

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user)
  };


  return (
    <div className="sign-container">
      <div className="sign-in">
      <h1>Sign In Please</h1>
      <Input />
      <button onClick={logGoogleUser}>Sign in with Google</button>
      </div>
      <SignUp />
    </div>
  );
};

export default SignIn;
