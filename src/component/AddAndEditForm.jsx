import React, { useState } from 'react'
import '../styles/addAndEditForm.scss'
const AddAndEditForm = ({setAddToDoSelected , todos , setTodos}) => {
  const [todoItem , setTodoItem] = useState({
    title:"",
    description:"",
    dueDate:"",
    status:""
  }) 
  const saveTodo = (e) => {
    e.preventDefault();
    if(todoItem?.title && todoItem?.description && todoItem?.dueDate && todoItem?.status) {
        const todoObj = {
            userId:1,
            id:Date.now(),
            title:todoItem.title,
            dueDate : todoItem?.dueDate,
            completed : todoItem?.status == "completed" ? true : false
        }
        setTodos([todoObj , ...todos]);
        setAddToDoSelected(false);

    }
    else {
        alert("please fill all the field");
    }
  }
  return (
    <div className='AddAndEditFormContainer'>
        <form  onSubmit={saveTodo} className='addAndEditForm'>
            <input onChange={(e) => {
                setTodoItem({...todoItem,title:e.target.value})
            }} type="text" placeholder='add title' className='textInput' />
            <input type="text" placeholder='description' className='textInput'  onChange={(e) => {
                setTodoItem({...todoItem,description:e.target.value})
            }}/>
            <div>
                <label>
                    Due date
                    <input  onChange={(e) => {
                setTodoItem({...todoItem,dueDate:e.target.value})
            }} type="date" name="birthday"></input>
                </label>
            </div>
            <div>   
            <input type="radio" value="completed" name="status"  onChange={(e) => {
                setTodoItem({...todoItem , status:e.target.value})
            }} /> completed
            <input type="radio"  onChange={(e) => {
                setTodoItem({...todoItem , status:e.target.value})
            }} value="incomplete" name="status" /> 
            incomplete
           
            </div>
            <div className='button_container'>
                <button type='submit' className='save'  >Save</button>
                <button type='button' className='close' onClick={()=>{setAddToDoSelected(false)}}>Close</button>
            </div>
        </form>
    </div>
  )
}

export default AddAndEditForm