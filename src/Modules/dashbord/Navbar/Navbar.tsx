import { useHistory } from "react-router-dom";
import { SearchOutlined } from "@ant-design/icons"


const Navbar = () => {
  const history = useHistory();
  return (
    <div className="navbar">
      <div className="container">
        <a href="/" className="logo_Logistica" > Logistica  </a>
        <ul>
          <a href="/">Main</a>
          <a href="/Auth/SignupEmail">Sign-in </a>
          <a href="/Menu"> Menu </a>
          <SearchOutlined />
        </ul>
      </div>
    </div>
  )
}
export default Navbar;

