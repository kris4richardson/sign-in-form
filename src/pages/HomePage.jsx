import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="Form">
      <h1>Home page</h1>
      <button type="submit">
        <Link to="/login">Sign in</Link>
      </button>
    </div>
  );
};

export default HomePage;
