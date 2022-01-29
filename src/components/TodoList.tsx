import { TodoItem } from './TodoItem';

import { ITodoListProps } from '../types/data';


const TodoList: React.FC<ITodoListProps> = (props) => {
  const {items, toggleTodo, removeTodo} = props;

  return <div>
    {
      items.map(todo => (
      <TodoItem 
      key={todo.id}
      toggleTodo = {toggleTodo}
      removeTodo ={ removeTodo}
      {...todo} 
      />
      ))
    }
  </div>
}

export {
  TodoList
}