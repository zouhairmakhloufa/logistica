import { useState } from "react";
import { Layout, Menu } from "antd";

import {
  BarChartOutlined,
  CloudOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import "./MyProfile.scss";

const { Header, Content, Sider } = Layout;

const ContentCient = ({ currentPage }: { currentPage: number }): any => {
  switch (currentPage) {
    case 1:
      return <p>saber</p>;
    case 2:
      return <p>products</p>;
    case 3:
      return <p>sssss</p>;
  }
};

const MyProfil = () => {
  const [currentPage, setCurrentPage] = useState(2);
  return (
    <Layout>
      <Sider
        style={{
          overflow: "auto",
          height: "100vh",
          position: "fixed",
          left: 0,
        }}
      >
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["4"]}>
          <Menu.Item
            key="1"
            icon={<UploadOutlined />}
            onClick={() => setCurrentPage(1)}
          >
            users 1
          </Menu.Item>
          <Menu.Item
            key="2"
            icon={<BarChartOutlined />}
            onClick={() => setCurrentPage(2)}
          >
            products 2
          </Menu.Item>
          <Menu.Item
            key="3"
            icon={<CloudOutlined />}
            onClick={() => setCurrentPage(3)}
          >
            sssss
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout" style={{ marginLeft: 200 }}>
        <Header className="site-layout-background" style={{ padding: 0 }} />
        <Content style={{ margin: "24px 16px 0", overflow: "initial" }}>
          <ContentCient currentPage={currentPage} />
        </Content>
      </Layout>
    </Layout>
  );
};

export default MyProfil;
