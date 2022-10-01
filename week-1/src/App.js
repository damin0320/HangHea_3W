// src/App.js
import React, {useState} from 'react'
import "./App.css"; // 🔥 반드시 App.css 파일을 import 해줘야 합니다.


function App() {
  const [inputValue, setInputValue] = useState("")
  const [todos, setTodo] = useState([])

  const onChange = e => {
    setInputValue(e.target.value)
  };

  const onCreate = e =>{
    setTodo(todos => [...todos, inputValue]);
    setInputValue('')
  }
  
  return (
    <div>
        <h1>나의 할 일</h1>
        <input type="text" value={inputValue} onChange={onChange}/>

        <button type="button" onClick={onCreate}>입력</button>
        <div>할 일 내용
        <ul>
          {todos.map(ent => (<li key={ent}>{ent}</li>))}
        </ul>
        </div>
    </div>
  );
}

export default App;