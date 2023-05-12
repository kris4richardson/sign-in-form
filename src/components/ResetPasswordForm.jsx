import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const ResetForm = () => {
  const auth = getAuth();
  const emailRef = useRef();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  // const [loading, setLoading] = useState(false);
  // const navigate = useNavigate();

  const handleSubmit = async () => {
    await sendPasswordResetEmail(auth, email)
      .then(function () {
        return "Check your inbox for futher instructions";
      })

      .catch(function (error) {
        return "Oops! Something went wrong!";
      })
      .finally(setEmail(""));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Enter your email</h1>
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Enter email here"
        ></input>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
export default ResetForm;
