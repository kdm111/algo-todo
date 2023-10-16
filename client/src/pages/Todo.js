import AlgoTodo from "../components/AlgoTodo"
import AddAlgoTodo from "../components/AddAlgoTodo"
import react, {useState, useEffect} from 'react'
import '../css/pages/todo.css'

export default function Todo() {
  const [algoTodo, setAlgoTodo] = useState([])
  useEffect(() => {
    setAlgoTodo([
      {
        id : 1,
        title : "algo1",
        check : false,
        company : 'leetcode',
        difficulty : 'level 1',
      },
      {
        id : 2,
        title : "algo2",
        check : true,
        company : 'leetcode',
        difficulty : 'level 2',
      },
      {
        id : 3,
        title : "algo3",
        check : false,
        company : 'leetcode',
        difficulty : 'level 3',
      },
      {
        id : 4,
        title : "algo4",
        check : true,
        company : 'leetcode',
        difficulty : 'level 4',
      },
    ])
  }, [])
  const deleteAlgoTodo = (deleteId) => {
    setAlgoTodo((algoTodo) => {
      return algoTodo.filter((el) => {
        return el.id !== deleteId
      })
    })
  }
  return (
    <section className="todo-container">
      <h1 className="todo-title">Todo</h1>
      <hr />
      <AddAlgoTodo 
      />
      <section>
        {
          algoTodo.map((el, idx) => {
            return (
              <AlgoTodo 
                key={el.id}
                algo={el}
                deleteAlgoTodo={deleteAlgoTodo}
              />
            )
          })
        }
      </section>
    </section>
  )
}