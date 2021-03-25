import { Rate,Button } from 'antd';
import { useState } from "react";
import { LeftSquareOutlined } from "@ant-design/icons"
import { useHistory } from "react-router-dom";
const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];

const Rater  = () => {
  const history = useHistory();

  return (
    <div className="contentImage">
      <img src="/imageAuth/imageAuth.jpg" className="imageAuth" />
      <div className="Service">

        <LeftSquareOutlined onClick={() => history.push("/TypeOfCars")} className="ClickRetour" />
        <br></br>
        <br></br>

      
        <Button className="button-Done-Successful" type="primary" htmlType="submit"
          style={{ background: "#66CDAA", borderColor: "#66CDAA" }}
          onClick={() => history.push("/Service")}
        > Submit Review{" "}
        </Button>

      </div>
    </div>
  );
};
export default Rater ;

