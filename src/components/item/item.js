import React from 'react'
import style from './item.scss'

const Item = () => {
  return (
    <div className={style.item}>
      <div className={style.img}>
        <img src="https://cdn.isweic.com/debian-install-shadowsocksr-and-serverspeeder.jpg" alt=""/>
      </div>
      <div className={style.content}>
        <h3 className={style.title}>ShadowsocksR+锐速是真滴强</h3>
        <p className={style.desc}>用了一年半的Vultr最低配置VPS在上个月终于过期了，相应的SS也没有了，然后用了一段时间的蓝灯（Lantern），日常Google的话完全可以用，但是满足不了我爱上Youtube的操作，而且有些国内网站走的也是代理，比如慕课网，所以我就觉得要再买个VPS来</p>
      </div>
      <div className={style.footer}>
        footer
      </div>
    </div>
  )
}

export default Item
