import { Button } from "../UI";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

export const Register = () => {
  createUserWithEmailAndPassword(auth, "hello@hello.com", "blackmamba@786")
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
  return (
    <div>
      <Button onClick={() => createUserWithEmailAndPassword} Type="primary">
        Register{" "}
      </Button>
    </div>
  );
};
