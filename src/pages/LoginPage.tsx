import LoginComponent from "../component/Login";
import "../styles/Login.css";
const LoginPage = ({ isLogin }) => {
  return (
    <div className="loginpage">
      <LoginComponent isLogin={isLogin} />
    </div>
  );
};
export default LoginPage;
