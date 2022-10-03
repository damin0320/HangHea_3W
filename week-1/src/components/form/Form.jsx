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
	let obj = {
		id : todoList.length,
		title : inputs.title,
		content : inputs.content
	}
	const newTodoList =  [...todoList, obj];
	setTodoList(newTodoList)
	setInputs({})
	}

const onDeleteHandler = (id) => {
todoList.map( (item, index, array) => {
	if(id === item.id) {
		array.splice(index, 1)
	}	
})
setTodoList([...todoList])
}

  return(
    <div>
      제목 <input type="text" value={inputs.title||""} name="title" onChange={onChangeHandler}/>
			내용 <input type="text" value={inputs.content||""} name="content" onChange={onChangeHandler}/>
			<button type="submit" onClick={onSubmitHandler}>추가하기</button>
			<ul>
					{todoList.map((item, id) =>{
						return <li key={id}>{item.id} {item.title} {item.content}
						<button type="button" onClick={()=>{onDeleteHandler(item.id)}}>삭제</button>
				{/*  */}

						</li>
					})}
				</ul>
    </div>

  )

}

export default App;

// todoList.map((item, index) => {item.id = index + 1})

// const [idNum, setIdNum] = useState(1);

// const onDeleteHandler = (e) => {
// 	const idx = e.target.className
// 	setTodoList(todoList.filter((items, todoIndex) => { 
// 		return parseInt(idx) !== todoIndex
// 		})
// 	);
// 	};

