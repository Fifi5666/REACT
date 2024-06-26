// import React, {useEffect, useState} from 'react'
// import Todo from './Todo'

// const TodoList = () => {
//   const [list, setList] = useState([])

//   useEffect(() => {
//     async function fetchData() {
//     try {
//       const response = await fetch("http://localhost:8080/todos")
//           const data = await response.json()
//           setList(data)   // list state 를 업데이트 -> componentDidUpdate
//           console.log(data)
//         } catch (error) {
//           console.log(error)
//         }
//       }
//         fetchData()
//     }, [])


//   return (

//     // <div>todoList</div>
//     <div className="container">
//         <h1>Todo List</h1>
//         <div className="todo-list">
//           {list.map((todo, index) => {
//             return <Todo todo={todo} key={todo.no}  />
//             })
//           }
//         </div>
//         <button type='button'>전체 삭제</button>
//         <button type='button'>전체 완료</button>
//     </div>
    
//   )
// }

// export default TodoList

import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ({todoList, onToggle, onRemove}) => {
  console.log(todoList);
  return (
    <ul className='todoList'>
      {todoList.map((todo)=> {
          return (<TodoItem todo={todo} onToggle={onToggle} onRemove={onRemove}/>
          )
      })}
    </ul>
  )
}

export default TodoList