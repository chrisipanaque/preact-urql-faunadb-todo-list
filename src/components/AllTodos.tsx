import { TodoType } from '../types';
import { useQuery } from 'urql';
import { ALL_TODOS_QUERY } from '../api/queries';
import Todo from './Todo';

const AllTodos: React.FunctionComponent = () => {
  const [allTodos] = useQuery({
    query: ALL_TODOS_QUERY,
  });

  return (
    <>
      {allTodos.data.getTodos.data.map((todo: TodoType) => (
        <Todo key={todo._id} todo={todo} />
      ))}
    </>
  );
};

export default AllTodos;
