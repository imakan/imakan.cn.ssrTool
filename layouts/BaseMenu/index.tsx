import { Menu as AntMenu } from 'antd';
import Link from 'next/link';
import React, { Component } from 'react';
import IconFont from '../../components/IconFont';
import menuList from './menuList';

interface MenuItem {
  path: string;
  title: string;
  icon: string;
  hidden?: boolean;
  redirect?: string;
}
const renderMenuItem = (item: MenuItem) => {
  return (
    <AntMenu.Item key={item.path}>
      <Link href={item.redirect || item.path} prefetch>
        <a>
          {item.icon && <IconFont type={item.icon} />}
          <span className="nav-text">{item.title}</span>
        </a>
      </Link>
    </AntMenu.Item>
  );
};
class BaseMenu extends Component<any> {
  public render() {
    return (
      <AntMenu {...this.props}>
        {menuList.map((item) => {
          if (!item.hidden) {
            return renderMenuItem(item);
          }
        })}
      </AntMenu>
    );
  }
}
export default BaseMenu;
