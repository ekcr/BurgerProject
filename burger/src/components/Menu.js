import {Data} from '../helpers/Data'
import MenuItem from '../components/MenuItem'
import '../styles/Menu.css';

export const Menu = () => {
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
            />
          )
        })}
      </div>
    </div>
  )
}
