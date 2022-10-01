import React, {useState} from 'react'

function App() {
	const [todoList, setTodoList] = useState([])
	const [inputs, setInputs] = useState({
		title : "",
		content : ""
	})

const onChangeHandler = (e) => {
setInputs({
	...inputs,
	[e.target.name] : e.target.value
})}
		

const onSubmitHandler = () =>{
	const newTodoList =  [...todoList, inputs];
	setTodoList(newTodoList)
}

  return(
    <div>
      제목 <input type="text" name="title" onChange={onChangeHandler}/>
			내용 <input type="text" name="content" onChange={onChangeHandler}/>
			<button type="button" onClick={onSubmitHandler}>추가하기</button>
			<ul>
					{todoList.map((item) =>{
						return <li key={item}>{item.title} {item.content}</li>
					})}
				</ul>


    </div>
  )

}

export default App;