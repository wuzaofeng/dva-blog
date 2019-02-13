import React from 'react'
import { List, Badge } from 'antd'
import Title from '../title/title'
import style from './categories.scss'

const data = [
  '使用经验',
  '我的项目',
  '资源分享',
  '项目分享',
  '学习笔记',
];

const Item = item => (
  <List.Item className={style.item}>
    <a className={style.text}>{item}</a>
    <Badge className={style.badgeIcon} count={5} />
  </List.Item>
)

const Categories = () => {
  const icon = {
    type: "folder-open"
  }
  return (
    <List
      className={style.categories}
      size="small"
      header={<Title icon={icon} text="文章分类"></Title>}
      split={false}
      dataSource={data}
      renderItem={Item}
    />
  )
}

export default Categories
