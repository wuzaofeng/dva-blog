import React, { Component } from 'react'
import { Menu } from 'antd';
import style from './head.scss'

class Nav extends Component {
  render() {
    const { menu } = this.props
    const menuStyle = {
      borderBottom: 0
    }
    return (
      <Menu
        mode="horizontal"
        style={menuStyle}
      >
        {
          menu.map(i => (
            <Menu.Item className={style.menuItem} key={i.key}>
              { i.text }
            </Menu.Item>
          ))
        }
      </Menu>
    );
  }
}

export default Nav
