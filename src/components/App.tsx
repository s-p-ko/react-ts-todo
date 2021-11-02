import {useState, useEffect, useRef} from 'react';

import {TodoList} from './TodoList';
import {ITodo} from '../types/data';

const App: React.FC = ()=> {
  const [value, setValue] = useState('');
  const [todos, setTodos] = useState<ITodo[]>([]);

  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value);
  }

  const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> =(e) => {
    if (e.key === 'Enter') {
      addTodo();
    }    
  }

  const addTodo = () => {
    if (value) {
      setTodos([...todos, {
        id: Math.random().toString(36).substr(2,9),
        title: value,
        complete: false,
      }])
      setValue('');
    }
  }

  const removeTodo = (id: string): void => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const toggleTodo = (id: string): void => {
    setTodos(todos.map(todo => {
      if(todo.id !== id) return todo;

      return {
        ...todo,
        complete: !todo.complete
      }
    }))
  }
  
  useEffect(()=>{
    if(inputRef.current) inputRef.current.focus();
  }, [])

  return <div>
    <div>
      <input value={value} onChange={handleChange} onKeyDown={handleKeyDown} ref={inputRef}/>
      <button onClick={addTodo}>Add</button>
    </div>
    <TodoList items={todos} removeTodo={removeTodo} toggleTodo={toggleTodo}/>
  </div>
}

export {App}
