import { Link } from 'react-router-dom';
import react from 'react'
import '../css/components/navbar.css'

export default function Navbar () {
  return (
    <>
      <nav className='navbar'>
        <h1 className='algo-todo-title'>
          <Link to="/" className='link'> ALGO-TODO</Link>
        </h1>
        <ul className='link-container'>
          <Link to="/" className='link'>Home</Link>
          <Link to="/problems" className='link'>Problem</Link>
          <Link to="/todo" className='link'>Todo</Link>

        </ul>
      </nav>
    </>
  )
}