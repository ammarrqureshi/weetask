import { Button, Input } from "../UI";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../firebase";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { Form } from "../UI/Form";

export const Register = () => {
  const handleUserSignUp = () => {
    createUserWithEmailAndPassword(auth, "melo@hello.com", "blackmamba@786")
      .then((userCredential) => {
        const user = userCredential.user;

        setDoc(doc(db, "users", user.uid), {
          firstName: "Ammar",
          lastName: "Qureshi",
        });
        addDoc(collection(db, `users/${user.uid}/tasks`), {
          text: "task no 1 by user hello",
        });
        console.log(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };
  return (
    <div>
      <form>
        <Input label="First Name" placeholder="First Name" />
      </form>
      <Button onClick={() => handleUserSignUp()} Type="primary">
        Register{" "}
      </Button>
    </div>
  );
};
