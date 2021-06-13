import { TodoType } from '../types/types';
import { useQuery } from 'urql';
import { ALL_TODOS_QUERY } from '../api/queries/queries';
import Todo from './Todo';

const AllTodos: React.FunctionComponent = () => {
  const [allTodos] = useQuery({
    query: ALL_TODOS_QUERY,
  });

  const todos = allTodos.data.getTodos.data.sort(
    (firstTodo: TodoType, secondTodo: TodoType) =>
      firstTodo.time < secondTodo.time ? 1 : -1
  );

  return (
    <>
      {todos.map((todo: TodoType) => (
        <Todo key={todo._id} todo={todo} />
      ))}
    </>
  );
};

export default AllTodos;
