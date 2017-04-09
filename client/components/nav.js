import React, { Component } from 'react'
import { render } from 'react-dom'
import Menu from 'antd/lib/menu'
import Icon from 'antd/lib/icon'
// import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class Nav extends Component {
	render() {
		return (
			<Menu className="wode-nav"
        mode="horizontal" theme="dark"
      >
        <Menu.Item key="app">
          <Icon type="mail" />言葉
        </Menu.Item>
        <Menu.Item key="index" >
          <Icon type="appstore"/>在线词典
        </Menu.Item>
        <Menu.Item key="video">
          <a href="https://ant.design" target="_blank" rel="noopener noreferrer">视频语料库</a>
        </Menu.Item>
        <Menu.Item key="text">
          <a href="https://ant.design" target="_blank" rel="noopener noreferrer">文本语料库</a>
        </Menu.Item>
        <Menu.Item key="signin" className="wode-nav-right">
          <a href="https://ant.design" target="_blank" rel="noopener noreferrer">登录</a>
        </Menu.Item>
        <Menu.Item key="register" className="wode-nav-right">
          <a href="https://ant.design" target="_blank" rel="noopener noreferrer">注册</a>
        </Menu.Item>
      </Menu>
			)
	}
}

export default Nav