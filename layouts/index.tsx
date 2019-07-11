import { Layout } from 'antd';
import Head from 'next/head';
import React from 'react';
import { LayoutProps } from '../typings/baseLayout';
import { urlToList } from '../util/index';
import BaseMenu from './BaseMenu/index';
const { Sider, Content } = Layout;
class BasicLayout extends React.Component<LayoutProps, any> {
  public constructor(props: LayoutProps) {
    super(props);
  }
  public render() {
    const { children, pathname } = this.props;
    const openKeys = pathname ? urlToList(pathname)[0] : '/';
    let defaultSelectedKeys = [pathname];
    let defaultOpenKeys = [openKeys];
    if (openKeys !== pathname) {
      defaultOpenKeys = [openKeys];
    }
    return (
      <>
        <Head>
          <title>imakan - 工具站</title>
          <link rel="stylesheet" href="/static/css/reset.css"/>
        </Head>
        <Layout>
          <Sider
            trigger={null}
            collapsible
            theme="light"
            collapsed={false}
            style={{
              overflow: 'auto',
              minHeight: '100vh'
            }}
          >
            <div className="logo">
              <img src='/static/images/tools.png' alt="" />
              <span>小工具平台</span>
            </div>
            <BaseMenu mode="inline" defaultSelectedKeys={defaultSelectedKeys} defaultOpenKeys={defaultOpenKeys} />
          </Sider>
          <Layout>
            <Content>
              <div className="content">{children}</div>
            </Content>
          </Layout>
        </Layout>

        <style jsx>
          {`
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
                color: '#303133';
                vertical-align: middle;
                white-space: nowrap;
              }
            }

            .content {
              min-height: 97vh;
              overflow: auto;
              margin: 10px;
              background-color: #fff;
              padding: 20px;
            }
          `}
        </style>
      </>
    );
  }
}

export default BasicLayout;
