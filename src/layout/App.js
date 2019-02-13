import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Layout, Row, Col } from "antd";
import style from './App.scss'
import Head from '../components/head/head'
import Side from '../components/side/side'

const { Content } = Layout

class App extends Component {
  render() {
    return (
      <>
        <Layout className={style.app}>
          <Head />
          <Layout className={style.main}>
            <Row style={{ width: '100%' }}>
              <Col span={18}>
                <Content className={style.content}>
                  {
                    this.props.children
                  }
                </Content>
              </Col>
              <Col style={{ position: 'relative', height: '100%' }} span={6}>
                <Side />
              </Col>
            </Row>
          </Layout>
        </Layout>
      </>
    )
  }
}

App.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.element,
  ]).isRequired
};

export default App
