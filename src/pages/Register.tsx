import { Input } from "../components/UI";
import { GoogleAuth } from "../components/auth/GoogleAuth";

export const Register = () => {
  return (
    <div>
      Register
      <form>
        <Input label="First Name" placeholder="First Name" />
        <Input label="Last Name" placeholder="Last Name" />
        <Input type="email" label="Email" placeholder="Email" />
      </form>
      <Register />
      <GoogleAuth />
    </div>
  );
};
