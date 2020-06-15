import { Formik, Form, Field } from "formik";

const AddTodo = ({ addTodo }) => {
  return (
    <Formik
      initialValues={{
        task: "",
        isCompleted: false
      }}
      onSubmit={(values, { resetForm }) => {
        addTodo(values);
        console.log("formik added todo");
        resetForm({});
        console.log("reseted form");
      }}
    >
      {() => (
        <Form>
          <Field type="text" id="task" name="task" />
        </Form>
      )}
    </Formik>
  );
};

export default AddTodo;
