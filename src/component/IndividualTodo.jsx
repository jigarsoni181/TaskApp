import React from 'react'
import '../styles/individualTodo.scss';
const IndividualTodo = ({todoData , toggleStatusToUpdate , deleteTodo}) => {
  return (
    <div className ='todo_container'>
        <span className='title'>{todoData?.title}</span>
        <div className='status_container'>
        <span onClick={()=>toggleStatusToUpdate(todoData?.id)} className={`status ${todoData?.completed ? "completed":"incomplete"}`}>{todoData?.completed ? "completed":"incomplete"}</span>
        <span className='delete' onClick={()=>deleteTodo(todoData?.id)}>Delete</span>
        </div>
    </div>
  )
}

export default IndividualTodo