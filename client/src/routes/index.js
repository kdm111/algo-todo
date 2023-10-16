import {Routes, Route} from 'react-router-dom'
import Main from '../pages/Main';
import Problems from '../pages/Problems';
import Todo from '../pages/Todo'

export default function Router () {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/problems" element={<Problems />} />
      <Route path="/todo" element={<Todo />} />
    </Routes>
  )
}