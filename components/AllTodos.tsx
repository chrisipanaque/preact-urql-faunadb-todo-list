import { AllTodosType } from '../interfaces';

export default function AllTodos({ allTodos }: AllTodosType) {
  return (
    <>
      {allTodos.map(({ _id, task }: any) => (
        <div key={_id}>{task}</div>
      ))}
    </>
  );
}
