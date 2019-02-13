import React from 'react'
import { Carousel } from 'antd';
import style from './swiper.scss'

const Swiper = () => {
  return (
    <Carousel className={style.carousel}>
      <div>
        <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1549953309556&di=78cd88b2e11f7ce1cd2e1c0015c642e4&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201807%2F13%2F20180713175041_mjGtz.jpeg" alt=""/>
      </div>
      <div>
        <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1549953309556&di=a58c9b29d6223e4cbea8966136b85522&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201510%2F22%2F20151022233405_twCRQ.jpeg" alt=""/>
      </div>
      <div>
        <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1549953309556&di=31fd1cf709bf8985d6af517207f451ee&imgtype=0&src=http%3A%2F%2Fi0.hdslb.com%2Fbfs%2Farchive%2F5116e03883cdd389461243a20375c5eba5136ebd.png" alt=""/>
      </div>
    </Carousel>
  )
}

export default Swiper
