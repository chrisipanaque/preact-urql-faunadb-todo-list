import Todo from "./Todo";

const Todos = ({ getTodosResult, completeTodo, deleteTodo }) => {
  const { data, fetching, error, stale } = getTodosResult;

  if (stale) return <div>Staling..</div>;
  if (fetching) return <div>Fetching..</div>;
  if (error) return <div>Error!</div>;

  return (
    <>
      {data.getTodos.data.map((todo) => (
        <Todo
          key={todo._id}
          todo={todo}
          completeTodo={completeTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </>
  );
};

export default Todos;
