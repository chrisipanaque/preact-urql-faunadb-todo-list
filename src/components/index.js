import AddTodo from "./AddTodo";
import Todos from "./Todos";

import { useQuery, useMutation } from "urql";
import { ALL_TODOS, ADD_TODO, DELETE_TODO, COMPLETE_TODO } from "../queries";

export default () => {
  const [getTodosResult] = useQuery({
    query: ALL_TODOS
  });

  const [addTodoResult, addTodoMutation] = useMutation(ADD_TODO);

  const [completeTodoResult, completeTodoMutation] = useMutation(COMPLETE_TODO);

  const [deleteTodoResult, deleteTodoMutation] = useMutation(DELETE_TODO);

  const addTodo = async (values) => {
    try {
      await addTodoMutation(values);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteTodo = async (id) => {
    try {
      await deleteTodoMutation({ id });
    } catch (error) {
      console.log(error);
    }
  };

  const completeTodo = async (id, isCompleted) => {
    try {
      await completeTodoMutation({ id, isCompleted });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <AddTodo addTodo={addTodo} />
      <Todos
        getTodosResult={getTodosResult}
        completeTodo={completeTodo}
        deleteTodo={deleteTodo}
      />
    </>
  );
};
