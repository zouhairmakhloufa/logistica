import { useHistory } from "react-router-dom";
import { SearchOutlined } from "@ant-design/icons"


const Navbar = () => {
  const history = useHistory();
  return (
    <div className="navbar">
      <div className="container">
        <a href="/" className="logo_Logistica" > Logistica  </a>
        <ul>
          <a href="/Auth/Signin">Sign-in </a>
          <a href="/Auth/SignUpUserOrDriver">Sign-up </a>
          <a href=""> Contact </a>
        </ul>
      </div>
    </div>
  )
}
export default Navbar;

