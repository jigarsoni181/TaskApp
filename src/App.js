import logo from './logo.svg';
import './App.scss';
import axios from 'axios';
import {useEffect, useState} from 'react'
import IndividualTodo from './component/IndividualTodo';
import AddAndEditForm from './component/AddAndEditForm';

 function App() {

  const [todos, setTodos] = useState([])
  const [addTodoSelected , setAddToDoSelected] = useState(false);

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then((response) => response.json())
    .then((data) => {
      setTodos(data)
    }).catch((err) => {
      console.log(err)
    })},[ ])
   const toggleStatusToUpdate = (todoId) => {
    const updatedToggledTodo = todos?.map((individualTodo)=> {
      if(individualTodo.id == todoId) {
        return {
          ...individualTodo , completed:!individualTodo.completed
        }
      }
      return individualTodo;
    })
    setTodos(updatedToggledTodo)
   }
   const deleteTodo = (id)=>{
    const remainingTodos = todos?.filter((individualTodo) => individualTodo?.id != id);
    setTodos(remainingTodos)
   }
  
  return (
   <> 
    <div className="App">
      <div className='header_addButton'>
        <h1>Your todo list</h1>
        <button className='add_todo_btn' onClick={()=>setAddToDoSelected(true)}>ADD TODO</button>
      </div>
      <div className='todoContainer'>
      {
        todos?.map((todoData)=> <IndividualTodo key={todoData?.id} todoData={todoData} toggleStatusToUpdate={toggleStatusToUpdate} deleteTodo={deleteTodo}/>)
      }
      </div>
      
    </div>
    {
      addTodoSelected && <AddAndEditForm setAddToDoSelected={setAddToDoSelected} todos={todos} setTodos={setTodos}/>
    }
    </>
  );
}

export default App;
