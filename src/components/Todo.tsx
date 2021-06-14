import { useState, SyntheticEvent } from 'react';
import { TodoType } from '../types/types';
import { useMutation } from 'urql';
import {
  COMPLETE_TODO_MUTATION,
  DELETE_TODO_MUTATION,
} from '../api/queries/queries';

type TodoProps = {
  todo: TodoType;
};

const Todo: React.FunctionComponent<TodoProps> = ({ todo }: TodoProps) => {
  const { _id, task, isCompleted, time } = todo;
  const [updatedTask, setUpdatedTask] = useState(task);
  const [toggleEdit, setToggleEdit] = useState(false);

  const [deleteResults, deleteTodo] = useMutation(DELETE_TODO_MUTATION);
  const [updateResults, updateTodo] = useMutation(COMPLETE_TODO_MUTATION);

  const submitUpdateIsCompleted = () => {
    updateTodo({
      id: _id,
      task,
      isCompleted: !isCompleted,
      time: isCompleted ? new Date().toISOString() : time,
    });
  };

  const submitUpdateTask = (event: SyntheticEvent) => {
    event.preventDefault;
    updateTodo({
      id: _id,
      task: updatedTask,
      isCompleted: isCompleted,
      time: isCompleted ? new Date().toISOString() : time,
    });
    setToggleEdit(false);
  };

  const handleEditToggle = () => {
    setToggleEdit((prevState) => !prevState);
  };

  const handleUpdateTaskState = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setUpdatedTask(event.target.value);
  };

  console.log('deleteResults', deleteResults);

  return deleteResults.fetching ? (
    <div>deleting...</div>
  ) : (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <input
        type="checkbox"
        checked={isCompleted}
        onChange={submitUpdateIsCompleted}
      />

      {toggleEdit ? (
        <form onSubmit={submitUpdateTask}>
          <input
            type="text"
            onChange={handleUpdateTaskState}
            value={updatedTask}
            style={{
              fontFamily: 'times',
              fontSize: '16px',
              padding: '5px',
            }}
          />
          <button
            type="submit"
            style={{
              padding: '7px',
            }}
          >
            edit
          </button>
        </form>
      ) : (
        <div
          style={{
            padding: '6px 20px 6px 6px',
          }}
          onClick={handleEditToggle}
        >
          {updateResults.fetching ? <div>updating...</div> : <div>{task}</div>}
        </div>
      )}

      <button
        onClick={() => deleteTodo({ id: _id })}
        style={{
          padding: '7px',
        }}
      >
        delete
      </button>
    </div>
  );
};

export default Todo;
