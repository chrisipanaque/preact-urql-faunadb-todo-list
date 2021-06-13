import { Formik, Form, Field } from 'formik';
import { useMutation } from 'urql';
import { ADD_TODO_MUTATION } from '../api/queries/queries';

const AddTodo: React.FunctionComponent = () => {
  const [, addTodo] = useMutation(ADD_TODO_MUTATION);

  return (
    <Formik
      initialValues={{
        task: '',
        isCompleted: false,
      }}
      onSubmit={(values, { resetForm }) => {
        addTodo({
          task: values.task,
          isCompleted: false,
          time: new Date().toISOString(),
        });
        resetForm({});
      }}
    >
      {() => (
        <Form
          style={{
            paddingBottom: '10px',
          }}
        >
          <Field
            type="text"
            id="task"
            name="task"
            style={{
              fontFamily: 'times',
              fontSize: '16px',
              padding: '5px',
            }}
          />
          <button
            type="submit"
            style={{
              padding: '6px',
            }}
          >
            add
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default AddTodo;
