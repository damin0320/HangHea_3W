import React, {useState} from 'react'

function Form({setTodoList, todoList}) {
	// const [todoList, setTodoList] = useState([])
	const [inputs, setInputs] = useState({
		id : 0,
		title : "",
		content : "",
		isDone : false
	})
// 두 개의 값 받아서 input에 넣는 것	
const onChangeHandler = (e) => {
setInputs({
	...inputs,
	[e.target.name] : e.target.value
})}
// 등록	
const onSubmitHandler = () =>{
	let obj = {
		id : todoList.length,
		title : inputs.title,
		content : inputs.content,
		isDone : false
	}
	const newTodoList =  [...todoList, obj];
	setTodoList(newTodoList)
	setInputs({})
	}


  return(
    <div>
			<div>
      제목 <input type="text" value={inputs.title||""} name="title" onChange={onChangeHandler}/>
			내용 <input type="text" value={inputs.content||""} name="content" onChange={onChangeHandler}/>
			<button type="submit" onClick={onSubmitHandler}>추가하기</button>
			</div>


			
    </div>

  )

}

export default Form;

