import { useState } from "react";
import TodoItem from "./components/TodoItem"
import { dummyData } from "./data/todos"
import AddTodoForm from "./components/AddTodoForm";

function App() {
  const [todos, setTodos] = useState(dummyData);
  
  function setTodoCompleted(id: number, completed: boolean){
    setTodos((prevTodos) => 
     prevTodos.map((todo) => (todo.id === id ? {...todo, completed} : todo ))
    );
}
  return (
   <main className=" py-10 h-screen space-y-5">
    <h1 className=" text-3xl font-extrabold text-center">
      Your todos
    </h1>
    <div className=" max-w-lg mx-auto bg-slate-100 rounded-md p-5">
      <AddTodoForm/>
      <div className="space-y-2">
        {todos.map(todo => (
          <TodoItem 
          key={todo.id}
          todo={todo}
          onCompletedChange={setTodoCompleted}
          />
        ))}
      </div> 
    </div>
   </main>
  )
}

export default App
