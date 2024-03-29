import { useTodo } from "@/api/Todo/Context";

const Todo = ({ todo }) => {
  const [, updateTodos] = useTodo();

  const removeTodo = (id) => {
    updateTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== id);
    });
  };
  return (
    <div>
      <li>
        {todo.value}
        <button onClick={() => removeTodo(todo.id)}>&times;</button>
      </li>
    </div>
  );
};

export default Todo;
