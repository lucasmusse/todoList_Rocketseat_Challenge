import styles from "./Tasks.module.css";

import { Trash, Pencil } from "@phosphor-icons/react";

export function Tasks({
  task,
  deleteTodo,
  completeTodo,
  editTodo,
  handleOpenEditForm,
}) {
  return (
    <>
      <div
        className={
          task.isCompleted === true ? styles.taskCardDone : styles.taskCard
        }
      >
        <button
          onClick={() => {
            completeTodo(task.id);
          }}
        ></button>
        <p>{task.content}</p>

        <span>
          <Pencil size={18} onClick={() => handleOpenEditForm(task.id, task.content, task.isCompleted)} />
          <Trash size={18} onClick={() => deleteTodo(task.id)} />
        </span>
      </div>
    </>
  );
}
