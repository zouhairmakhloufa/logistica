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
  const {
    setTypeOfCar,
    setDriverId,
    setCarName,
    typeOfCars,
    carName,
    distance,
    setTotal,
  }: any = useContext(BookinContext);

  useEffect(() => {
    const fetchCars = async () => {
      const result = await axios.get("http://localhost:5000/car/cars");
      setCars(result.data.cars);
    };
    fetchCars();
  }, []);
  console.log("Type Of Cars : ", typeOfCars);
  console.log("Cars : ", cars);
  console.log("distance", distance);
  return (
    <div className="contentImage">
      <img src="/imageAuth/imageAuth.jpg" className="imageAuth" />
      <div className="TypeOfCars">
        <LeftSquareOutlined
          onClick={() => history.push("/PoidsAndTaille")}
          className="ClickRetour"
        />
        <h2> Type Of Cars: {carName}</h2>
        <div className="ListCars">
          <List
            style={{ width: 450 }}
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
                        setTotal(
                          Number(distance) * Number(item.klmPrice) +
                            Number(item.basePrice)
                        );
                      }}
                    >
                      {item.name}
                    </a>
                  }
                  description={`1-2000 Kg ,  klm price: ${item.klmPrice}dt  
                  , base price: ${item.basePrice}dt  Car Price : ${
                    Number(distance) * Number(item.klmPrice) + Number(item.basePrice) }dt `}
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
