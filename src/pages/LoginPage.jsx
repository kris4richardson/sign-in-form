import { Link } from "react-router-dom";
import "../App.css";
import SignIn from "../components/LoginForm";

const LoginPage = () => {
  return (
    <div className="Form">
      <SignIn />
      <p>
        Forgot your password? <Link to="/resetpassword">Reset password</Link>
      </p>
    </div>
  );
};

export default LoginPage;
