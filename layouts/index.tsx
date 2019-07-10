import { Layout } from "antd";
import React from "react";
import { LayoutProps } from "../typings/baseLayout";
import { urlToList } from "../util/index";
import BaseMenu from "./BaseMenu/index";
const { Sider, Content } = Layout;
import getconfig from 'next/config';
let { publicRuntimeConfig } = getconfig();

class BasicLayout extends React.Component<LayoutProps, any> {
  public constructor(props: LayoutProps) {
    super(props);
    this.state = {
      collapsed: false
    };
  }
  public render () {
    const { children, pathname } = this.props;
    const openKeys = urlToList(pathname)[0];
    let defaultSelectedKeys = [pathname];
    let defaultOpenKeys = [openKeys];
    if (openKeys !== pathname) {
      defaultOpenKeys = [openKeys];
    }
    return (
      <>
        <Layout>
          <Sider
            trigger={null}
            collapsible
            theme='light'
            collapsed={this.state.collapsed}
            style={{
              overflow: "auto",
              height: "100vh"
            }}
          >
            <div className="logo">
              <img src={publicRuntimeConfig.assetPrefix + '/images/tools.png'} alt="" />
              {!this.state.collapsed && <span>小工具平台</span>}
            </div>
            <BaseMenu
              mode="inline"
              defaultSelectedKeys={defaultSelectedKeys}
              defaultOpenKeys={defaultOpenKeys}
            />
          </Sider>
          <Layout>
            <Content>
              <div className="content">
                {children}
              </div>
            </Content>
          </Layout>
        </Layout>

        <style jsx>{`
        .logo {
          height: 32px;
          margin: 16px;
          img {
            margin-left: 6px;
            height: 100%;
          }
        
          span {
            margin-left: 12px;
            font-size: 18px;
            color:'#303133';
            vertical-align: middle;
            white-space:nowrap;
          }
        }
        
        .content {
          height: calc(100vh - 64px - 54px - 20px);
          overflow: auto;
          margin: 10px;
          background-color: #FFF;
          padding: 20px;
        }`}
        </style>
      </>
    );
  }
}

export default BasicLayout;
