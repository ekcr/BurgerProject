import React from 'react'
import contactImage from '../assets/five2.jpeg'
import '../styles/Contact.css'

export const Contact = () => {
  return (
    <div className='contact'>
      <div className='contact-image' style={{backgroundImage: `url(${contactImage})`}}></div>
      <div className='contact-us'>
        <h1> Bizimle İletişime Geçin</h1>
        <form>
          <label>Ad Soyad</label>
          <input
            type='text'
            name='name'
            placeholder='Lütfen doldurunuz...'
          />
          <label>Mail</label>
          <input
            type='mail'
            name='mail'
            placeholder='Lütfen doldurunuz...'
          />
          <label>Mesaj</label>
          <textarea
            name='message'
            placeholder='Lütfen doldurunuz...'
          />
          <button> Gönder </button>
        </form>
      </div>
    </div>
  )
}
