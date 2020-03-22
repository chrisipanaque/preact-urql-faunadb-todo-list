import { useMutation } from "urql";
import { Formik, Form, Field } from "formik";

const ADD_TODO = `
  mutation ($task: String!, $isCompleted: Boolean!) {
    createTodo(data: {task: $task, isCompleted: $isCompleted}) {
      _id
      task
      isCompleted
    }
  }
`;

const AddTodo = () => {
  const [addTodoResult, addTodo] = useMutation(ADD_TODO);
  const { data, fetching, error } = addTodoResult;

  return (
    <Formik
      initialValues={{
        task: "",
        isCompleted: false
      }}
      onSubmit={(values, { resetForm }) => {
        addTodo(values)
          .then(res => {
            console.log("res", res);
            resetForm({});
          })
          .catch(err => {
            console.log("err", err);
          });
      }}
    >
      {() => (
        <Form>
          <Field type="text" name="task" />
        </Form>
      )}
    </Formik>
  );
};

export default AddTodo;
