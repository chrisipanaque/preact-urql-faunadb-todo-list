import AllTodos from '../components/AllTodos';
import AddTodo from '../components/AddTodo';
import { useQuery } from 'urql';
import { ALL_TODOS_QUERY } from '../api/queries';

const TodoApp = () => {
  const [allTodos] = useQuery({
    query: ALL_TODOS_QUERY,
  });

  return (
    <>
      <AddTodo />
      <AllTodos allTodos={allTodos.data.getTodos.data} />
    </>
  );
};

export default TodoApp;
