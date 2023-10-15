import React from 'react'
import AddTodo from '../components/addTodo.jsx'
import Todos from '../components/todos.jsx'


export default function HomePage() {
  return (
    <div className='mx-9'>
      <AddTodo/>
      <Todos/>
    </div>
  )
}
