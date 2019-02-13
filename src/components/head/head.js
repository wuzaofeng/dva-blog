import React, { Component } from 'react'
import {Col, Layout, Row} from 'antd';
import Nav from './nav'
// import Search from './search'
import Logo from './logo'
import style from './head.scss'

const { Header } = Layout;

class Head extends Component {
  render() {
    const { menu } = this.props
    // console.log(this.props)
    // const navProps = {
    //   menu
    // }

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
            <Nav menu={menu} />
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
