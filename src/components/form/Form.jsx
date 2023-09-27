import styles from "./Form.module.css";
import { PlusCircle } from "@phosphor-icons/react";

export function Form({text, handleNewText, addTodo}) {
  return (
    <form onSubmit={() => addTodo(text)} className={styles.form}>
      <input
        className={styles.inputTask}
        onChange={handleNewText}
        value={text || ""}
        name="taskInput"
        type="text"
        placeholder="Adicione uma nova tarefa"
        required
      />
      <button className={styles.buttonSubmit} type="submit" value="Criar">
        <b>Criar</b> <PlusCircle size={20} />
      </button>
    </form>
  );
}
