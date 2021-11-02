import { ITodo } from '../types/data';

interface ITodoItem extends ITodo {
  removeTodo: (id: string) => void;
  toggleTodo: (id: string) => void;
}

const TodoItem: React.FC<ITodoItem> = (props) => {
  const {id, title, complete, removeTodo, toggleTodo} = props;

  return <div>
    <input type="checkbox" checked={complete} onChange={() => toggleTodo(id)}/>
    <span style={{
      display: 'inline-block', 
      margin: '10px 15px 0px 15px',
    }}>
      {title}
    </span>
    
        <button onClick={() => removeTodo(id)}
          style = {{
            background: 'transparent',
            border: 'none',
            outline: 'none',
            color: 'red'
          }}
        >x</button>
  </div>
}

export {TodoItem}