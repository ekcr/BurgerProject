import {Data} from '../helpers/Data'
import MenuItem from '../components/MenuItem'
import '../styles/Menu.css';
import { useState , React} from 'react';

export const Menu = () => {
  const [bucket, setBucket] = useState([])

  const handleAddBucket = (name, price) => {
    const newItem = {
      name: name,
      price: price
    }

    setBucket([...bucket, newItem])
  }

  return (
    <div className='menu'>
      <h1 className='menuTitle'>Burgerlerimiz</h1>
      <div className='menuList'>
        {Data.map((data, index) => {
          return(
            <MenuItem
            key = {index}
            name = {data.name}
            image = {data.image}
            content = {data.content}
            price = {data.price}
            handleAddBucket = {handleAddBucket}
            />
          )
        })}
      </div>
    </div>
  )
}
