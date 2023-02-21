import React, { useState } from 'react';
import './index.css';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu, theme, Space, Card } from 'antd';

import './index.css';


const movies = [
  { title: "wakanda", des: "this is best movie", imageSrc: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" },
  { title: "iron man", des: "this is best movie", imageSrc: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" },
  { title: "iron man 2", des: "this is best movie", imageSrc: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" },
  { title: "ironman 3", des: "this is best movie", imageSrc: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" },
  { title: "caption america", des: "this is best movie", imageSrc: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" },
  { title: "avangers", des: "this is best movie", imageSrc: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" },
  { title: "avangers", des: "this is best movie", imageSrc: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" },

];
const items1 = [{
  key: 1, label: "new movies"
}, {
  key: 1, label: "old movies"
}]
const { Header, Sider, Content } = Layout;
const {Meta} = Card







const App = () => {
  const  handleClick = ()=>{}
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <UserOutlined />,
              label: 'Home',
            },
            {
              key: '2',
              icon: <VideoCameraOutlined />,
              label: 'Movies',
            },
            {
              key: '3',
              icon: <VideoCameraOutlined />,
              label: 'Web-Series',
            },
          ]}
        />
      </Sider>
      <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: () => setCollapsed(!collapsed),
          })}
        </Header>
      <Layout className="site-layout">
      
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >


          
          <div style={{ margin: "auto 10px" }}>
           
            <Space direction="horizontal" size={19} wrap >
              {
                movies.map(obj => {
                  return (<Card style={{ width: 250 }} hoverable cover={<img alt="example" src={obj.imageSrc} onClick={() => handleClick(obj.title)} />}>
                    <Meta title={obj.title} description={obj.des} />
                  </Card>)
                })
              }

            </Space>
          </div>
          Content
        </Content>
      </Layout>
    </Layout>
  );
};
export default App