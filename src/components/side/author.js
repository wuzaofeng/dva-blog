import React from 'react'
import { Avatar } from 'antd';
import style from './author.scss'

const Author = () => {
  return (
    <div className={style.author}>
      <div className={style.pic}>
        <Avatar size={98} icon="user" src="../../assets/author.jpg" />
      </div>
      <p className={style.location}>shenzhen China</p>
      <p className={style.email}>673908452@qq.com</p>
    </div>
  )
}

export default Author
