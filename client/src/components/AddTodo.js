// import React, {useState, useRef} from 'react'
// import todo from './Todo'

// export default function AddTodo({addItem}) {
//   const input = useRef(null)
//   const [todoItem, setTodoItem] = useState({
//     title : ""
//   })
//   const addClick = () => {
//     if (todoItem.title !== "")  {
//       addItem(todoItem)
//       setTodoItem({title : ""})
//     } else {
//       return input.current.focus()
//     }
//   }
//   return (
//     <form className='add-todo-form'>
//       <input
//         type='text'
//         placeholder='add todo'
//         value={todoItem.title}
//         ref={input}
//         onChange={(e) => {
//           setTodoItem({title : e.target.value})
//         }}
//       />
//       <button
//         type='button'
//         onClick={addClick}
//       >add</button>
//     </form>
//   )
// }
