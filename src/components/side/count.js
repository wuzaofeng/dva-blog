import React from 'react'
import { Row, Col } from 'antd';
import style from './count.scss'

const Statistic = (props) => {
  return (
    <div className={style.count}>
      <p className={style.p}>
        {props.count}
      </p>
      <span className={style.span}>{props.text}</span>
    </div>
  )
}

const Count = () => {
  return (
    <Row>
      <Col span={12}>
        <Statistic text="文章" count="100" />
      </Col>
      <Col span={12}>
        <Statistic text="标签" count="100" />
      </Col>
    </Row>)
}

export default Count
