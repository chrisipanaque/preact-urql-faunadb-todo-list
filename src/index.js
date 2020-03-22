import { createClient, Provider } from "urql";
import Todos from "./Todos";

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
      <Todos />
    </Provider>
  );
};
