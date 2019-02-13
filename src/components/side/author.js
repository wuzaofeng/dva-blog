import React from 'react'
import { Avatar } from 'antd';
import style from './author.scss'

const Author = ({ authorSrc, location, email}) => {
  return (
    <div className={style.author}>
      <div className={style.pic}>
        <Avatar size={98} icon="user" src={authorSrc} />
      </div>
      <p className={style.location}>{location}</p>
      <p className={style.email}>{email}</p>
    </div>
  )
}

export default Author
