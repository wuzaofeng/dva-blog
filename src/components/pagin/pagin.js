import React from 'react'
import { Pagination } from "antd";
import styles from './pagin.scss'

const Pagin = (props) => {
  const _default = {
    defaultCurrent: 1,
    total:50,
    size: 'small',
    ...props
  }
  return (
    <div className={styles.pageWrap}>
      <Pagination {..._default} />
    </div>)
}

export default Pagin
