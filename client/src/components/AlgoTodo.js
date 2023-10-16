import {useState} from 'react'
import '../css/components/algo-todo.css'

export default function AlgoTodo({algo, deleteAlgoTodo}) {
  const [item, setItem] = useState(algo)
  const clickAlgoTodoDeleteBtn = () => {
    deleteAlgoTodo(item.id)
  }
  return (
    <>
      <article className="algo-todo">
        <input
          className='algo-todo-checkbox'
          type="checkbox" 
          name={`algo${item.id}`}
          id={`algo${item.id}`}
          value={item.check}
          defaultChecked={item.check}
        />
        <div
          className='algo-todo-content'
        >
          <label 
            className='algo-todo-title'
            htmlFor={`algo${item.id}`}
          >
            {item.title}
          </label>
          <div
            className='algo-todo-tags'
          >
            <span className='algo-todo-tag'>
              {item.company}
            </span>
            <span className='algo-todo-tag'>
              {item.difficulty}
            </span>
          </div>
        </div>

        <button
          className='algo-todo-delete-btn'
          onClick={clickAlgoTodoDeleteBtn}
        >
          삭제
        </button>
      </article>
    </>
  )
}