import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {addItem, deleteItem, updateItem} from '../redux/itemsSlice'

function Items() {
    const [title, setTitle]= useState('')
    const [description, setDescription]= useState('')
    const dispatch = useDispatch()
    const items = useSelector((state)=> state.card.items)
    const [isEdit, setIsEdit] = useState(false)
    const [id, setId] = useState(null)
    const [updatedTitle, setUpdatedTitle]= useState('')
    const [updatedDescription, setUpdatedDescription]= useState('')
    // console.log(items)
  return (
    <div className='container'>
    <div className='form'>
    <input type='text' value={title} placeholder='Enter item title' onChange={(e)=> setTitle(e.target.value)} />
    <input type='text' value={description} placeholder='Enter item decsription' onChange={(e)=> setDescription(e.target.value)} />
    <button onClick={()=> {
        dispatch(addItem({ id : items.length+1 ,title, description}))
        setTitle('')
        setDescription('')
    }}>Add Item</button>
    </div>
    <div className='items'>
{items.length > 0 ? items.map((item) => 
    <div className='item' key={item.id}>
   <h3> {item.title} </h3>
   <p>{item.description} </p>
   <button onClick={()=> {
     dispatch(deleteItem(item.id))
   }}>DELETE</button>
   <button onClick={()=> {
    setIsEdit(true)
    setId(item.id)
   }} >EDIT</button>
  <br/>
  {
    isEdit && id === item.id &&(
      <>
      <input type='text' placeholder='update title' onChange={(e)=> setUpdatedTitle(e.target.value) } />
      <input type='text' placeholder='update description' onChange={(e)=> setUpdatedDescription(e.target.value) } />
      <button onClick={()=> {
        dispatch(updateItem({ id: item.id, title:updatedTitle, description: updatedDescription }))
        setIsEdit(false)
      }} >Update</button>
      </>
    )
  }

   </div>)

  : 'no items'}
    </div>
    </div>
  )
}

export default Items
