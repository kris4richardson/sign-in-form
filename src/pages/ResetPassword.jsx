import { Link } from "react-router-dom";
import ResetForm from "../components/ResetPasswordForm";

const ResetPassword = () => {
  return (
    <div className="Form">
      <ResetForm />
      <p>
        Go back <Link to="/home">main page</Link>
      </p>
    </div>
  );
};

export default ResetPassword;
