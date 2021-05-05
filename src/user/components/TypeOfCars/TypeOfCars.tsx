import { Button } from "antd";
import { LeftSquareOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";
import { useContext } from "react";
import { List, Avatar } from "antd";
import BookinContext from "../../../context/booking";
import "./TypeOfCars.scss";

const data = [
  { title1: "Golf", },
  { title1: "Bmw", },
];
const data2 = [
  { title2: "iveco camion", },
  { title2: "isuzu camion", },
];

const TypeOfCars = () => {
  const history = useHistory();
  const { setTypeOfCar, TypeOfCars, }: any = useContext(BookinContext);
  console.log("Type Of Cars : ", TypeOfCars);

  return (
    <div className="contentImage">
      <img src="/imageAuth/imageAuth.jpg" className="imageAuth" />
      <div className="TypeOfCars">
        <LeftSquareOutlined
          onClick={() => history.push("/PoidsAndTaille")}
          className="ClickRetour"
        />
        <h2> Type Of Cars</h2>
        <div className="ListCars">

          <List
            itemLayout="horizontal"
            dataSource={data}
            renderItem={(item) => (
              <List.Item>
                <List.Item.Meta
                  avatar={<Avatar src="/imageTypeOfCars/CarsPNG.jpg" />}
                  title={<a onClick={() => { setTypeOfCar(item.title1) }} > {item.title1} </a>}
                  description=" 1-1000 Kg"

                />
              </List.Item>
            )}
          />

          <List
            itemLayout="horizontal"
            dataSource={data2}
            renderItem={(item) => (
              <List.Item>
                <List.Item.Meta
                  avatar={<Avatar src="/imageTypeOfCars/Cars2PNG.jpg" />}
                  title={<a onClick={() => { setTypeOfCar(item.title2) }}> {item.title2} </a>}
                  description=" 1-2000 Kg"
                />
              </List.Item>
            )}
          />
        </div>

        <Button
          className="button-TypeOfCars"
          type="primary"
          htmlType="submit"
          style={{ background: "#66CDAA", borderColor: "#66CDAA" }}
          onClick={() => history.push("/Service")}
        >
          Next{" "}
        </Button>
      </div>
    </div>
  );
};
export default TypeOfCars;
