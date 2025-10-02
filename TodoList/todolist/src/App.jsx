import { useState } from "react";
import TodoList from "./components/TodoList";

function App(){
    const [todos, setTodos] = useState([]);
    const [filter, setFilter] = useState('all');
   

    const filteredTodos = todos.filter((todo)=>{
        if(filter === 'completed'){
            return todo.completed; //completed task
        }
        if(filter === 'not-completed'){
            return !todo.completed; //not completed task
        }
        return true; //all task
    })

    
    return(
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="w-full max-w-md mx-auto bg-white p-4 shadow rounded">
                <h1 className="text-2xl font-bold text-center mb-6">Todo List</h1>
                <TodoList 
                todos={filteredTodos} 
                setTodos={setTodos} 
                filter={filter} 
                setFilter={setFilter}
                />
            </div>
        </div>
    )
}

export default App;