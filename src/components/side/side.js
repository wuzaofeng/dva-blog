import React, { Component } from 'react'
import { Layout } from 'antd';
import Author from './author'
import Count from './count'
import BarIcon from './bar-icon'
import Categories from '../categories/categories'
import Tags from '../tags/tags'
import style from './side.scss'
const { Sider } = Layout

class Side extends Component {
  render() {
    return (
      <Sider width='100%' className={style.side}>
        <Author />
        <Count />
        <BarIcon />
        <Categories />
        <Tags />
      </Sider>
    )
  }
}

export default Side
