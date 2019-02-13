import React from 'react'
import { List, Badge } from 'antd'
import Title from '../title/title'
import style from './categories.scss'

const Item = item => (
  <List.Item className={style.item}>
    <a className={style.text}>{item.name}</a>
    <Badge className={style.badgeIcon} count={item.count} />
  </List.Item>
)

const Categories = ({ categories }) => {
  const icon = {
    type: "folder-open"
  }
  return (
    <List
      className={style.categories}
      size="small"
      header={<Title icon={icon} text="文章分类"></Title>}
      split={false}
      dataSource={categories}
      renderItem={Item}
    />
  )
}

export default Categories
