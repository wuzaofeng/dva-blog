import React from 'react'
import { Calendar } from 'antd'
import style from './kalendar.scss'

function onPanelChange(value, mode) {
  console.log(value, mode);
}

const Kalendar = () => {
  return (
    <div className={style.kalendar}>
      <Calendar fullscreen={false} onPanelChange={onPanelChange} />
    </div>)
}

export default Kalendar
