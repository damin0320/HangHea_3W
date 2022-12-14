import React, {useState} from 'react'
import "./style.css";

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
// 리스트로 들어오는 값 computed property로 값 매칭해주기
// setTodo(...~, todo)와 비슷한데 두 개를 한 번에 넣어준다. => 객체로 맞춰서
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
			<div className="input-group">
				<label className="form-label">제목</label>
      <input type="text" className="input-box" value={inputs.title||""} name="title" onChange={onChangeHandler}/>
			{/* value가 undefined면 ""를 반환한다. */}
			<label className="form-label">내용</label>
			<input type="text" className="input-box" value={inputs.content||""} name="content" onChange={onChangeHandler}/>
			<button type="submit" onClick={onSubmitHandler} className="add-button">추가하기</button>
			</div>


			
    </div>

  )

}

export default Form;

