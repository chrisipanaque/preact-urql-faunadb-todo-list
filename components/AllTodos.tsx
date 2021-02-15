export default function Todos({ allTodos }: any) {
  const { data } = allTodos;

  return (
    <>
      {data.map(({ _id, task }: any) => (
        <div key={_id}>{task}</div>
      ))}
    </>
  );
}
