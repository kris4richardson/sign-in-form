import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ResetPassword from "./pages/ResetPassword";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/home" Component={HomePage} />
        <Route exact path="/login" Component={LoginPage} />
        <Route exact path="/resetpassword" Component={ResetPassword} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
