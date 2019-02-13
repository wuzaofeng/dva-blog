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

const Count = ({ count }) => {
  const { article, tags } = count
  return (
    <Row>
      <Col span={12}>
        <Statistic count={article} text="文章" />
      </Col>
      <Col span={12}>
        <Statistic count={tags} text="标签" />
      </Col>
    </Row>)
}

export default Count
