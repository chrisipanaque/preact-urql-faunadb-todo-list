import AllTodos from '../components/AllTodos';
import { withUrqlClient } from 'next-urql';
import { useQuery } from 'urql';
import { client } from '../api/client';
import { ALL_TODOS_QUERY } from '../api/queries';

const TodoApp = () => {
  const [allTodos] = useQuery({
    query: ALL_TODOS_QUERY,
  });

  return (
    <>
      <AllTodos allTodos={allTodos.data.getTodos.data} />
    </>
  );
};

export default withUrqlClient(client, { ssr: true })(TodoApp);
