import React from 'react'
import Card from './Card'
import '../style/containerCard.css'

const ContainerCard = () => {
  return (
    <div className='container-card'>
      <Card img="https://res.cloudinary.com/dk0z4ums3/image/upload/v1605878928/attached_image/jangan-sepelekan-8-manfaat-salak-untuk-kesehatan-ini.jpg" name="Salak" price="30"/>
      <Card img="https://cf.shopee.co.id/file/e79e3ec8aad9b0dc82895ff5426471ac" name="Manggo" price="20"/>
      <Card img="https://ik.imagekit.io/10tn5i0v1n/article/16b88cc3b3dbb85dc98609c41c05484f.jpeg" name="Banana" price="10"/>
    </div>
  )
}

export default ContainerCard