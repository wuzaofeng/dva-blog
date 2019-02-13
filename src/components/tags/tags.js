import React from 'react'
import { Card, Tag } from 'antd';
import Title from '../title/title'
import style from './tags.scss'

const Tags = () => {
  const icon = {
    type: "tags"
  }
  return (
    <Card
      className={style.tags}
      title={<Title icon={icon} text="标签云" />}
      size="small"
      bordered={false}
      headStyle={{
        borderBottom: 0
      }}
      bodyStyle={{
        padding: '15px'
      }}
    >
      <Tag className={style.tag} color="#f50">Java</Tag>
      <Tag className={style.tag} color="#f50">Java</Tag>
      <Tag className={style.tag} color="#f50">Java</Tag>
      <Tag className={style.tag} color="#f50">Java</Tag>
      <Tag className={style.tag} color="#f50">Java</Tag>
      <Tag className={style.tag} color="#f50">Java</Tag>
      <Tag className={style.tag} color="#f50">Java</Tag>
    </Card>
  )
}

export default Tags
