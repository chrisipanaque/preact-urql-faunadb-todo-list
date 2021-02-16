import { AllTodosType } from '../interfaces';
import { getTodos } from '../api/getTodos';
import { addTodo } from '../api/addTodo';
import AllTodos from '../components/AllTodos';
import AddTodo from '../components/AddTodo';

export default function TodoApp({ allTodos }: AllTodosType) {
  return (
    <>
      <AddTodo addTodo={addTodo} />
      <AllTodos allTodos={allTodos} />
    </>
  );
}

export async function getStaticProps() {
  const allTodos: AllTodosType = await getTodos();
  return {
    props: {
      allTodos,
    },
  };
}
