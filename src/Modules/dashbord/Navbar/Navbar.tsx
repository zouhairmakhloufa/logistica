import { useHistory } from "react-router-dom";
import { SearchOutlined } from "@ant-design/icons";

const Navbar = () => {
  const history = useHistory();
  return (
    <div className="navbar">
      <div className="container">
        <a href="/" className="logo_Logistica">
          {" "}
          Logistica{" "}
        </a>
        <ul>
          <a href="/">Home </a>

          {!localStorage.getItem("token") && (
            <a href="/Auth/SignUpUserOrDriver">Sign-up </a>
          )}
          {!localStorage.getItem("token") && (
            <a href="/Auth/Signin">Sign-in </a>
          )}
          <a href="/Contact"> Contact </a>
          {localStorage.getItem("token") && (
            <a>{localStorage.getItem("userName")} </a>
          )}
          {localStorage.getItem("token") && (
            <button
              onClick={() => {
                localStorage.clear();
                window.location.replace("/");
              }}
            >
              deconnexion
            </button>
          )}
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
