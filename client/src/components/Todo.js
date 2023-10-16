// import React, { useState } from 'react'

// export default function Todo({todo, deleteItem, updateItem}) {
//   const [todoItem, setTodoItem] = useState(todo)
//   // const {id, title, done} = todo
//   const [readOnly, setReadOnly] = useState(true)
//   const deleteClick = () => {
//     deleteItem({
//       deleteId : todoItem.id,
//     })
//   }
//   const offReadOnlyMode = () => {
//     setReadOnly((readOnly) => {return !readOnly})
//   }
//   const editEventHandler = (e) => {
//     const {title, ...rest} = todoItem
//     setTodoItem(() => {
//       return {
//         title : e.target.value,
//         ...rest
//       }
//     })
    
//   }
//   // enter 키를 누르면 readonly를 true로 변경
//   const editKeyEventHandler = (e) => {
//     if (e.key === 'Enter') {
//       setReadOnly((readOnly) => {
//         return !readOnly
//       })
//       updateItem(todoItem)
//     }
//   }
//   const checkBoxEventHandler = async (e) => {
//     const {done, ...rest} = todoItem
//     await setTodoItem(() => {
//       return {
//         done : e.target.checked,
//         ...rest
//       }
//     })
//     updateItem(todoItem) // 체크 박스 변경 시 저장
//   }
//   return (
//     <div>
//       <input 
//         type="checkbox" 
//         name={`todo${todoItem.id}`} 
//         id={`todo${todoItem.id}`} 
//         value={todoItem.done}
//         defaultChecked = {todoItem.done}
//         onChange={checkBoxEventHandler}
//       />
//       {/* <label htmlFor={`todo${id}`} >{title}</label> */}
//       <input 
//         type='text' 
//         value={todoItem.title} 
//         readOnly={readOnly} 
//         onClick={offReadOnlyMode}
//         onChange={editEventHandler}
//         onKeyDown={editKeyEventHandler}
//         /> 
//       <button
//         onClick={deleteClick}
//       >
//         delete
//       </button>
//     </div>
//   )
// }
