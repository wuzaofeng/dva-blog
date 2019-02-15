import React, { Component } from 'react'
import { Tabs } from 'antd'
import { StickyContainer, Sticky } from 'react-sticky'
import Table from '../../components/table/table'
// import style from './Manage'

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
      component: <Table />
    }, {
      title: '分类管理',
      content: '分类管理'
    }, {
      title: '标签管理',
      content: '标签管理'
    }, {
      title: '链接管理',
      content: '链接管理'
    }, {
      title: '文章管理',
      content: '文章管理'
    }]
    return (
      <StickyContainer>
        <Tabs defaultActiveKey="0" renderTabBar={renderTabBar}>
          {
            tabs && tabs.map((item, i) => (
              <TabPane tab={item.title} key={i}>
                { item.component }
                {item.content}</TabPane>
            ))
          }
        </Tabs>
      </StickyContainer>
    )
  }
}

export default Manage
