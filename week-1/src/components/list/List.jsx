import React from "react";
import Todo from "../todo/Todo";
import "./style.css";

function List ({todoList, setTodoList}){
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
      item.isDone = item.isDone ? false:true
      //결국 값이다.
    }
      return item;
    })
    setTodoList(newTodoList)
}

return(
<div>
<div>
  <h2>
    Working
    </h2>
					<>
					{todoList.filter((i) => !i.isDone).map((item) =>{
						return  <Todo key={item.id}
                          obj = {item}
                          // 2중 필터 돌지 말기.
                          // 아예 객체로 받아준다.(그러면 다 들어감)
                          onDeleteHandler={onDeleteHandler}
                          onDoneHandler={onDoneHandler}/>
					})}
					</>
</div>

			<div>
      <h2>
    Done
    </h2>
					<>
					{todoList.filter((i) => i.isDone).map((item) =>{
						return  <Todo key={item.id}
                      obj = {item}
                      onDeleteHandler={onDeleteHandler}
                      onDoneHandler={onDoneHandler}/> 
					})}
					</>

</div>
</div>
)
}

export default List;