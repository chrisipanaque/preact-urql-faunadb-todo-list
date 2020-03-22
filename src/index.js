import { createClient, Provider } from "urql";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";

const client = createClient({
  url: `${process.env.PREACT_APP_FAUNADB_URL}`,
  fetchOptions: () => {
    const token = `${process.env.PREACT_APP_FAUNADB_TOKEN}`;
    return {
      headers: { authorization: token ? `Bearer ${token}` : "" }
    };
  }
});

export default () => {
  return (
    <Provider value={client}>
      <AddTodo />
      <Todos />
    </Provider>
  );
};
