import { useSelector } from "react-redux";
import AddForm from "./AddForm";
import { useDispatch } from "react-redux";
import { deleteTodo, markAsDone } from "../features/todo/todoSlice";

export default function Todo() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  const handleDelete = (id) => {
    console.log(id);
    dispatch(deleteTodo(id));
  };

  const handleMarkAsDone = (id) => {
    dispatch(markAsDone(id));
    console.log(id);
  };

  return (
    <>
      <AddForm />
      <h2>Todo List App</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span style={{ color: todo.isDone ? "red" : "none" }}>
              {todo.task}
            </span>
            <button onClick={() => handleDelete(todo.id)}>Delete</button>
            <button onClick={() => handleMarkAsDone(todo.id)}>
              MarkAsDone
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
