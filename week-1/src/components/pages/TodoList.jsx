import React, {useState} from "react"
import Form from "../form/Form";
import Header from "../header/Header";
import Layout from "../layout/Layout";
import List from "../list/List";
const TodoList = () => {
  const [todoList, setTodoList] = useState(
    [
    {
		id : 0,
		title : "리액트 공부",
		content : "리액트를 열심히 합시다",
		isDone : false
  },
  {
		id : 1,
		title : "자바스크립트 공부",
		content : "자바스크립트를 열심히 합시다",
		isDone : true
  }
]
  )

  return(
<Layout>
      <Header />
      <Form setTodoList={setTodoList} todoList={todoList} />
      <List setTodoList={setTodoList} todoList={todoList} />
    </Layout>
  )
}

export default TodoList;
