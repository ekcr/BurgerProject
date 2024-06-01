import React from 'react'
import { useDispatch } from 'react-redux'
import { addCourse } from '../store/slices/orderSlice'
import { IoIosAddCircle } from "react-icons/io";

export default function MenuItem({ name, image, price, content }) {
  const dispatch = useDispatch();

  const handleAddCourse = () => {
    dispatch(addCourse());
  };

  return (
    <form>
      <div className='menuItem'>
        <div style={{ backgroundImage: `url(${image})` }}></div>
        <h1>{name}</h1>
        <h6>{content}</h6>
        <p> {price} </p>
        <button className='add-burger' onClick={handleAddCourse}>
          <IoIosAddCircle />
        </button>
      </div>
    </form>
  )
}

