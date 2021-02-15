import { client } from './urqlClient';
import { ALL_TODOS_QUERY } from './queries';

export async function getTodos() {
  const {
    data: { getTodos: allTodos },
  } = await client.query(ALL_TODOS_QUERY).toPromise();

  return allTodos;
}
