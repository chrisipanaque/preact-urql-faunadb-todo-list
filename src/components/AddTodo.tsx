import { Formik, Form, Field } from 'formik';
import { useMutation } from 'urql';
import { ADD_TODO_MUTATION } from '../api/queries';

const AddTodo = () => {
  const [, something] = useMutation(ADD_TODO_MUTATION);

  return (
    <Formik
      initialValues={{
        task: '',
        isCompleted: false,
      }}
      onSubmit={(values, { resetForm }) => {
        something({
          task: values.task,
          isCompleted: false,
        });
        resetForm({});
      }}
    >
      {() => (
        <Form>
          <Field type="text" id="task" name="task" />
          <button type="submit">add</button>
        </Form>
      )}
    </Formik>
  );
};

export default AddTodo;