import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import {useState} from 'react'

 function App() {

  const [todos, setTodos] = useState([])

  const getData = () => {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then((response) => response.json())
    .then((data) => {
      // console.log("Data==>", JSON.stringify(data));
      setTodos(data)
    }).catch((err) => {
      console.log(err)
    })
  }

  
  return (
    <div className="App">
      <h1>Task Application</h1>
      <button onClick={getData} style={{marginBottom: "50px"}}>Click me for Task List</button>
        <table style={{width: "600px", margin: "auto", border: "1px solid black", borderCollapse:"collapse"}}>
        {todos.map((todo) => {
          return(
            
              <tr key={todo.id}>
                <td style={{border: "1px solid black", borderCollapse:"collapse"}}>{todo.title}</td>
              </tr>
            
          )
        })
        }
        </table>
    </div>
  );
}

export default App;
