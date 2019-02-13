import React, { Component } from 'react'
import {Col, Layout, Row} from 'antd';
import Nav from './nav'
// import Search from './search'
import Logo from './logo'
import style from './head.scss'

const { Header } = Layout;

class Head extends Component {
  render() {
    const navProps = {
      menu: [{
        text: '首页',
        link: '/',
        key: 'home',
      }, {
        text: '关于',
        link: '/',
        key: 'about',
      }, {
        text: '项目',
        link: '/',
        key: ' project',
      }, {
        text: '链接',
        link: '/',
        key: 'link'
      }]
    }

    const rowProps = {
      type: "flex",
      justify:"space-between",
      align:"middle"
    }

    const logoProps = {
      text: 'WEIC`S BLOG'
    }

    return (
      <Header className={style.header}>
        <Row className={style.head} {...rowProps}>
          <Col span={18}>
            <Nav {...navProps} />
            {/*<Search />*/}
          </Col>
          <Col className={style.logo} span={6} >
            <Logo {...logoProps} />
          </Col>
        </Row>
      </Header>
    )
  }
}

export default Head
