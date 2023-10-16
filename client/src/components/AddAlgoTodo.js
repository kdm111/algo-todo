
import '../css/components/add-algo-todo.css'
import '../js/components/add-algo-todo.js'
import { useState } from 'react'


export default function AddAlgoTodo () {
  const [popup, setPopup] = useState(false)
  const togglePopup = () => {
    setPopup(!popup)
  }
  return (
    <section className=''>
      <section>
        <button
          onClick={togglePopup}
        >new Todo</button>
      </section>
      {popup && (
          <section
            className='add-algo-todo-container'
          >
            <form 
              className='add-algo-todo-form'
            >
              <h1>todo 넣기</h1>
              <input type='text'/>
              <textarea
                placeholder='문제 넣기'
              ></textarea>
              <button type='button'>제출</button>
              <button type='button' onClick={() => {setPopup(!popup)}}>취소</button>
            </form>
          </section>

        )}
    </section>
  )
}