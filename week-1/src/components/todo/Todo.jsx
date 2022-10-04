import React from 'react'
import "./style.css";

const Todo = ({obj, onDeleteHandler, onDoneHandler}) => {
	return (
		<div>
		<div>
					<>
					{/* 여기 맵은 필요 없다. 아래 구문도 3항 연산자로 하나로 묶어버린다 */}
					
							<div> <h3>{obj.title}</h3>
										<p>{obj.content}</p>
							 </div>
							
							<button type="button" onClick={()=>{onDeleteHandler(obj.id)}}>삭제</button>
							<button type="button" onClick={()=>{onDoneHandler(obj.id)}}>{obj.isDone ? "취소" : "완료"}</button>
							
					
					</>
</div>
</div>

	)
}

export default Todo;