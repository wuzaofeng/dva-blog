import React from 'react'
import { Icon } from 'antd'
import style from './bar-icon.scss'

const BarIcon = ({ barIcon }) => {
  return (
    <ul className={style.ul}>
      <li className={style.li}>
        <a>
          <Icon type="github" theme="filled" />
        </a>
      </li>
      {
        barIcon.map((item, i) => (
          <li key={i} className={style.li}>
            <a href={item.link}>
              <Icon type={item.icon} theme="filled" />
            </a>
          </li>
        ))
      }
    </ul>)
}

export default BarIcon
