import { LeftSquareOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { Button, List, Avatar } from "antd";
import BookinContext from "../../../context/booking";
import axios from "axios";
import "./TypeOfCars.scss";

const TypeOfCars = () => {
  const history = useHistory();
  const [cars, setCars] = useState([]);
  const { setTypeOfCar, setDriverId, setCarName, typeOfCars }: any =
    useContext(BookinContext);

  useEffect(() => {
    const fetchCars = async () => {
      const result = await axios.get("http://localhost:5000/car/cars");
      setCars(result.data.cars);
    };
    fetchCars();
  }, []);
  console.log("Type Of Cars : ", typeOfCars);
  console.log("Cars : ", cars);

  return (
    <div className="contentImage">
      <img src="/imageAuth/imageAuth.jpg" className="imageAuth" />
      <div className="TypeOfCars">
        <LeftSquareOutlined
          onClick={() => history.push("/PoidsAndTaille")}
          className="ClickRetour"
        />
        <h2> Type Of Cars: {typeOfCars}</h2>
        <div className="ListCars">
          <List
            itemLayout="horizontal"
            dataSource={cars}
            renderItem={(item: any) => (
              <List.Item>
                <List.Item.Meta
                  avatar={<Avatar src="/imageTypeOfCars/CarsPNG.jpg" />}
                  title={
                    <a
                      onClick={async () => {
                        console.log("item", item);
                        setCarName(item.name);
                        setDriverId(item.driverId);
                        setTypeOfCar(item._id);
                      }}
                    >
                      {item.name}
                    </a>
                  }
                  description=" 1-1000 Kg"
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
