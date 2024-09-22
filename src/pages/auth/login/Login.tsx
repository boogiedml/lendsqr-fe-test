import { Link } from "react-router-dom";
import ActionButton from "../../../components/atoms/button/ActionButton";
import Input from "../../../components/atoms/input/Input";
import "./login.scss";

const Login = () => {
  return (
    <div className="login_section">
      <div className="image_section">
        <div className="logo-container">
          <img src="/images/lendsqr-logo.svg" alt="lendsqr" />
        </div>
        <div className="image_container -translate-y-[50%]">
          <img src="/images/auth-img.svg" alt="auth-img" />
        </div>
      </div>
      <div className="form">
        <div className="logo-container">
          <img src="/images/lendsqr-logo.svg" alt="lendsqr" />
        </div>
        <div>
          <header>
            <h1>Welcome!</h1>
            <p>Enter details to login.</p>
          </header>
          <form action="">
            <Input
              attributes={{
                placeholder: "Email",
              }}
            />
            <Input
              attributes={{
                placeholder: "Password",
              }}
              passwordInput
            />
            <Link to="/">Forgot password?</Link>
            <ActionButton buttonText="LOG IN" />
          </form>
      </div>
      </div>
    </div>
  );
};

export default Login;
