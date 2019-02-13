import React from 'react'
import { Icon } from 'antd'
import style from './title.scss'

const Title = (props) => {
  const { icon, text } = props
  return (
    <div className={style.title}>
      <Icon className={style.icon} {...icon} />
      <span className={style.text}>{text}</span>
    </div>
  )
}

export default Title
