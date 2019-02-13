import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from "dva"
import { Layout, Row, Col } from "antd"
import style from './App.scss'
import Head from '../components/head/head'
import Side from '../components/side/side'

const { Content } = Layout

class App extends Component {
  componentDidMount() {
    this.getUser()
  }

  getUser = () => {
    this.props.dispatch({
      type: 'user/fetchUser'
    })
  }

  render() {
    const { user }= this.props
    const { menu } = user
    console.log(user)
    return (
      <>
        {
          user && (
            <Layout className={style.app}>
              <Head menu={menu} />
              <Layout className={style.main}>
                <Row className={style.mainRow}>
                  <Col span={18}>
                    <Content className={style.content}>
                      {
                        this.props.children
                      }
                    </Content>
                  </Col>
                  <Col style={{ position: 'relative', height: '100%' }} span={6}>
                    <Side user={user} />
                  </Col>
                </Row>
              </Layout>
            </Layout>
          )
        }
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

export default connect(({ user }) => ({
  user,
}))(App)
