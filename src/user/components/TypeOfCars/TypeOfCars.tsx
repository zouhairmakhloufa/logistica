import { Button } from "antd";
import { LeftSquareOutlined } from "@ant-design/icons"
import { useHistory } from "react-router-dom";
import { List, Avatar } from 'antd';

const data = [
  {
    title: 'Loggistica cars',
  },
  {
    title: 'Loggistica Van',
  },
  {
    title: 'Loggistica Van',
  },
  {
    title: 'Loggistica Van',
  },
];


const TypeOfCars = () => {
  const history = useHistory();
  return (
    <div className="contentImage">
     <img src="/imageAuth/imageAuth.jpg" className="imageAuth" />
      <div className="auth-signup-info">

        <LeftSquareOutlined onClick={() => history.push("/Auth/PoidsAndTaille")} className="ClickRetour" />
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
        </div>

        <Button className="button-Next-poids" type="primary" htmlType="submit"
          style={{ background: "#66CDAA", borderColor: "#66CDAA" }}
          onClick={() => history.push("/Auth/Service")}
        >
          Next{" "}
        </Button>

      </div>
    </div>
  );
};
export default TypeOfCars;
