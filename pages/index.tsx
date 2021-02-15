import { AllTodosType } from '../interfaces';
import { getTodos } from '../api/getTodos';
import AllTodos from '../components/AllTodos';

export default function TodoApp({ allTodos }: AllTodosType) {
  return (
    <>
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
