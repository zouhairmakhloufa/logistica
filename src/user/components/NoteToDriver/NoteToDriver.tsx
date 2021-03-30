import { Input, Button } from "antd";
import { LeftSquareOutlined } from "@ant-design/icons"
import { useHistory } from "react-router-dom";
import "./NoteToDriver.scss"

const NoteToDriver = () => {
  const history = useHistory();
  return (
    <div className="contentImage">
      <img src="/imageAuth/imageAuth.jpg" className="imageAuth" />
      <div className="NoteToDriver">
     
        <LeftSquareOutlined onClick={() => history.push("/BookingSuccessful")} className="ClickRetour" />  <br></br>
      
        <br></br>
        <br></br>
        <h2> Add note to driver</h2>
        <br></br>
        <Input placeholder="E.g I am located on the right side of" />
        <br></br>
        <br></br>

        <Button className="button-NoteDriver" type="primary" htmlType="submit"
          style={{ background: "#66CDAA", borderColor: "#66CDAA" }}
          onClick={() => history.push("/RetourRequest")}
   
        > Add{" "}
        </Button>

      </div>
    </div>
  );
};
export default NoteToDriver;