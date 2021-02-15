import { createClient, Provider } from 'urql';
import TodoApp from './components';

const client = createClient({
  url: `${process.env.FAUNADB_URL}`,

  fetchOptions: () => {
    const token = `${process.env.FAUNADB_TOKEN}`;

    return {
      headers: { authorization: token ? `Bearer ${token}` : '' },
    };
  },
});

export default () => {
  return (
    <Provider value={client}>
      <TodoApp />
    </Provider>
  );
};
