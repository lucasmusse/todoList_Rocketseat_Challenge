import styles from "./Form.module.css";

export function EditForm({editedText, handleEditedText, editTodo, handleOpenEditForm}) {
  return (
    <form onSubmit={() => editTodo(editedText)} className={styles.form}>
      <input
        className={styles.inputTask}
        onChange={handleEditedText}
        value={editedText || ""}
        name="taskInput"
        type="text"
        placeholder="Adicione uma nova tarefa"
        required
      />
      <button className={styles.buttonSubmit} type="submit" value="Criar">
        <b>Editar</b> 
      </button>
      <button className={styles.cancelButton} type="button" onClick={()=> handleOpenEditForm()} value="Editar">
        <b>Cancelar</b> 
      </button>
    </form>
  );
}
