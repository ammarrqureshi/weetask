import { GoogleAuthProvider, getAuth, signInWithRedirect } from "firebase/auth";
import { Button } from "../UI";
export const GoogleAuth = () => {
  const provider = new GoogleAuthProvider();
  const handleGoogleSignIn = () => {
    signInWithRedirect(getAuth(), provider);
  };

  return (
    <Button Type="secondary" onClick={() => handleGoogleSignIn()}>
      Sign Up with Google
    </Button>
  );
};
