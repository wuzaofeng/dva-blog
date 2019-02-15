import React from 'react'
import { Button } from 'antd'
import style from './item.scss'
import { formatDate } from "../../utils/utils";

const Item = (props) => {
  const { data } = props
  return (
    <div className={style.item}>
      <a href={data.link} className={style.img}>
        <img src={data.img} alt=""/>
      </a>
      <div className={style.head}>
        <h3 className={style.title}>
          {data.title}
        </h3>

        <span className={style.create}>
          { data.author } 发布于 { formatDate(data.create) }
        </span>
      </div>
        <div className={style.content}>
          <p className={style.desc}>{data.content}</p>
        </div>
        <div className={style.footer}>
          <Button>继续阅读</Button>
          <span className={style.visitor}>
            阅读量 {data.visitor}</span>
        </div>
      </div>
  )
}

export default Item
