

import { signInWithGooglePopup, signInWithGoogleRedirect, createUserDocumentFromAuth, signInAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase";
import SignUp from "../sign-up/sign-up";
import './sign-in.scss';
import Button from "../button/button";

const SignIn = () => {

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user)
  };


  return (
    <div className="sign-container">
      <div className="sign-in">
      <h1 className="sign__heading">Have An Account?</h1>
      <p>Sign in with Email & Password</p>
      <div className="inputs">
      <input className="form-input" type='email' required name='email' id='email'  />
      <label className="form-input--label" htmlFor="email">Email</label>
      <input className="form-input" type='password' name='password' id='password'/>
      <label className="form-input--label" htmlFor="password">Password</label>
      </div>
      <Button onClick={'TODO---'} displayText='Sign in with Email' />
      <Button onClick={logGoogleUser} className='google-btn' displayText={'Sign in with Google'} />
      </div>
      <SignUp />
    </div>
  );
};

export default SignIn;
