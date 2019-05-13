import React, { Component } from 'react'
import { Layout,  } from 'antd';
import Author from './author'
import Count from './count'
import BarIcon from './bar-icon'
import Categories from '../categories/categories'
import Tags from '../tags/tags'
import style from './side.scss'
const { Sider } = Layout

class Side extends Component {
  render() {
    const { user } = this.props;
    return (
      <Sider width='100%' className={style.side}>
        <Author {...user} />
        <Count {...user} />
        <BarIcon {...user} />
        <Categories {...user} />
        <Tags {...user} />
      </Sider>
    )
  }
}

export default Side
