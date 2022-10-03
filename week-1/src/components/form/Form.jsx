import React, {useState} from 'react'

function App() {
	const [todoList, setTodoList] = useState([])
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
// 취소
const onDeleteHandler = (id) => {
todoList.map( (item, index, array) => {
	if(id === item.id) {
		array.splice(index, 1)
	}	
})
setTodoList([...todoList])
}
// 완료 처리
const onDoneHandler = (id) => {
	// 1. todoList를 돈다.
	// 2. todoList 내의 "현재 클릭"한 todo의 isDone값을 변경해준다.(현재 클릭한 id값을 알아야한다.)
	// 3. 그 배열을 새로 업데이트(setTodoList)해준다.
	const newTodoList = todoList.map((item) => {
		if(item.id === id){
		// item.isDone = !item.isDone;
		// not 연산자
		item.isDone = item.isDone ? false:true
		//3항 연산자. 결국 값이다.
	}
		return item;
	})
	setTodoList(newTodoList)
}


  return(
    <div>
			<div>
      제목 <input type="text" value={inputs.title||""} name="title" onChange={onChangeHandler}/>
			내용 <input type="text" value={inputs.content||""} name="content" onChange={onChangeHandler}/>
			<button type="submit" onClick={onSubmitHandler}>추가하기</button>
			</div>

			<div>
				<h2>
					Working
					{/* isDone이 false인 값만 렌더링된다. */}
					{/* 1. isDone이 false인것만, 이것을 순회하며 렌더링 => filter*/}
				</h2>
					<>
					{todoList.filter((item) => !item.isDone).map((item, id) =>{
						return <div key={id}>
							<div> <h3>{item.title}</h3>
										<p>{item.content}</p>
							 </div>
							
							<button type="button" onClick={()=>{onDeleteHandler(item.id)}}>삭제</button>
						<button type="button" onClick={()=>{onDoneHandler(item.id)}}>완료</button>
							
						</div>
					})}
					</>
</div>

			<div>
				<h2>
					Done
				</h2>
					<>
					{todoList.filter((item) => item.isDone).map((item, id) =>{
						return <div key={id}>
							<div> <h3>{item.title}</h3>
										<p>{item.content}</p>
							 </div>
							<button type="button" onClick={()=>{onDeleteHandler(item.id)}}>삭제</button>
						<button type="button" onClick={()=>{onDoneHandler(item.id)}}>취소</button>
							
						</div>
					})}
					</>

</div>
    </div>

  )

}

export default App;

