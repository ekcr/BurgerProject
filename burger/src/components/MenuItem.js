import React from 'react'

export default function MenuItem({name, image, price, content, handleAddBucket}) {
  return (
    <div className='menuItem'>
        <div style={{backgroundImage: `url(${image})`}}></div>
        <h1>{name}</h1>
        <h6>{content}</h6>
        <p> {price} </p>
        <button className='add-burger' onClick={()=> handleAddBucket(name, price)}> Ekle </button>
    </div>
  )
}
