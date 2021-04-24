import { useHistory } from "react-router-dom";
import { HomeOutlined,MailOutlined } from "@ant-design/icons"
import "./Navbar2.scss"

const Navbar2 = () => {
  const history = useHistory();
  return (
    <div className="navbar">
      <div className="container">
        <a href="/" className="logo_Logistica" > Logistica  </a>
        <ul>
          <a href="/"> <HomeOutlined />  </a>
          <a href="/Contact"><MailOutlined /> </a>
        </ul>
      </div>
    </div>
  )
}
export default Navbar2;

