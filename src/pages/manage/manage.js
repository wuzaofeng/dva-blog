import React, { Component } from 'react'
import { connect } from 'dva';
import { Tabs } from 'antd'
import { StickyContainer, Sticky } from 'react-sticky'
import UserManage from './user'
import Categories from './categories'
import Tags from './tags'
import Articles from './articles'

const { TabPane } = Tabs

const renderTabBar = (props, DefaultTabBar) => (
  <Sticky bottomOffset={80}>
    {({ style }) => (
      <DefaultTabBar {...props} style={{ ...style, zIndex: 1, background: '#fff' }} />
    )}
  </Sticky>
);

class Manage extends Component {
  render() {
    const tabs = [{
      title: '用户管理',
      content: '用户管理',
      component: <UserManage />
    }, {
      title: '分类管理',
      content: '分类管理',
      component: <Categories />
    }, {
      title: '标签管理',
      content: '标签管理',
      component: <Tags />
    }, {
      title: '文章管理',
      content: '文章管理',
      component: <Articles />
    }]
    return (
      <StickyContainer>
        <Tabs defaultActiveKey="0" renderTabBar={renderTabBar}>
          {
            tabs && tabs.map((item, i) => (
              <TabPane tab={item.title} key={i}>
                { item.component }
              </TabPane>
            ))
          }
        </Tabs>
      </StickyContainer>
    )
  }
}

export default connect(({ user }) => ({
  user,
}), (props) => {
  console.log(props)
  return {}
})(Manage)
