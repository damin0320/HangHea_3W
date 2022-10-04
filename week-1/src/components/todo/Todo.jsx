import React from 'react'
import "./style.css";

const Todo = ({obj, onDeleteHandler, onDoneHandler}) => {
	return (
		<div className="todo-container">
		<div>
					<>
					{/* 여기 맵은 필요 없다. 아래 구문도 3항 연산자로 하나로 묶어버린다 */}
					
							<div> <h2 className="todo-title">{obj.title}</h2>
										<p>{obj.content}</p>
							 </div>
							<div className="button-set">
							<button type="button" className="todo-delete-button button" onClick={()=>{onDeleteHandler(obj.id)}}>삭제</button>
							<button type="button" className="todo-complete-button button" onClick={()=>{onDoneHandler(obj.id)}}>{obj.isDone ? "취소" : "완료"}</button>
							</div>
					
					</>
</div>
</div>

	)
}

export default Todo;