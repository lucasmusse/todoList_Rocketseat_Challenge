import { ClipboardText } from "@phosphor-icons/react";
import styles from "./NoTask.module.css"

export function NoTask() {
  return (
    <div className={styles.noTask}>
      <ClipboardText size={58} className={styles.icon}/>
      <p>
        <span><b>Você ainda não tem tarefas cadastradas</b></span>
      </p>
      <p>Crie tarefas e organize seus itens a fazer</p>
    </div>
  );
}
