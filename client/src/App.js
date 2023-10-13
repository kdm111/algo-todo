import { useState, useEffect } from 'react';
import Todo from './components/Todo'
import AddTodo from './components/AddTodo';
import axios from 'axios'
const SERVER = process.env.REACT_APP_DB_HOST

function App() {
  const [todoItems, setTodoItems] = useState([]);
  useEffect(() => {
    const getTodos = async () => {
      const response = await axios.get(
        `${SERVER}/todos`
      )
      setTodoItems(response.data)
    }
    getTodos()
  }, [])
  const addItem = async (addTodo) => {
    const addItem = {
      title : addTodo.title,
    }
    const res = await axios.post(
      `${SERVER}/todo`, 
      addItem
    )
    if (res.status === 201) {
      const data = res?.data
      setTodoItems([...todoItems, data])
    } else {
      alert('알 수 없는 서버 오류 발생!')
    }
  }
  const updateItem = async (targetItem) => {
    console.log(targetItem)
    await axios.patch(
      `${SERVER}/todo/${targetItem.id}`,
      targetItem
    )
    setTodoItems([...todoItems])
  }
  const deleteItem = async ({deleteId}) => {
    // console.log(deleteId)
    // setTodoItems((data) => {
      // return data.filter((item) => item.id !== deleteId)
    // const response = await axios.delete(
    //   `${SERVER}/todo/${deleteId}`
    // )
    const response = await axios.delete(
      `${SERVER}/todo/${deleteId}`
    )
    const data = todoItems.filter((item) => item.id !== deleteId)
    setTodoItems(data)
    // setTodoItems(async (data) => {
    //   const response = await axios.delete(
    //     `${SERVER}/todo/${deleteId}`
    //   )
    //   if (response.status === 200) {
    //   return data.filter((item) => item.id !== deleteId)
    //   } else {
    //     alert('알 수 없는 서버 오류 발생!')
    //     return [...data]
    //   }
    // })
  }
  return (
    <div className="App">
      <AddTodo 
        addItem={addItem}
      />
      <p>
        {todoItems.length}개가 존재합니다.
      </p>
      {
        todoItems.map((todo, idx) => 
          <Todo
            key={todo.id}
            todo={todo}
            updateItem={updateItem}
            deleteItem={deleteItem}
          />
        )
      }
    </div>
  );
}

export default App;
