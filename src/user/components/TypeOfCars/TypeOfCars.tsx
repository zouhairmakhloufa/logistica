import { Button } from "antd";
import { LeftSquareOutlined } from "@ant-design/icons"
import { useHistory } from "react-router-dom";
import { List, Avatar } from 'antd';
import "./TypeOfCars.scss"

const data = [
  {
    title: 'Logistica cars',
  },
  {
    title: 'Logistica cars',
  },
];
const data2 = [
  {
    title2: 'Loggistica Van',
  },
  {
    title2: 'Loggistica Van',
  }, 
 
];

const TypeOfCars = () => {
  const history = useHistory();
  return (
    <div className="contentImage">
     <img src="/imageAuth/imageAuth.jpg" className="imageAuth" />
      <div className="auth-signup-info">  

        <LeftSquareOutlined onClick={() => history.push("/PoidsAndTaille")} className="ClickRetour" />
        <h2> Type Of Cars</h2>
        <div className="ListCars">
          <List
            itemLayout="horizontal"
            dataSource={data}
            renderItem={item => (
              <List.Item>
                <List.Item.Meta
                  avatar={<Avatar src="/imageTypeOfCars/CarsPNG.jpg" />}
                  title={<a>{item.title}</a>}
                  description=" 1-1000 Kg"
                />
              </List.Item>
            )}
          />
            <List
            itemLayout="horizontal"
            dataSource={data2}
            renderItem={item => (
              <List.Item>
                <List.Item.Meta
                  avatar={<Avatar src="/imageTypeOfCars/Cars2PNG.jpg" />}
                  title={<a>{item.title2}</a>}
                  description=" 1-2000 Kg"
                />
              </List.Item>
            )}
          />
        </div>

        <Button className="button-TypeOfCars" type="primary" htmlType="submit"
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
