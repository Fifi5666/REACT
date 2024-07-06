import React from 'react'

const Todo = ({todo}) => {
  return (
   
        <ul className="todo">
            <li>
                <input type="checkbox" hidden={todo.status}/>
                <h3>{todo.name}</h3>
                <button type='button'>삭제</button>
            </li>
        </ul>
    
  )
}

export default Todo