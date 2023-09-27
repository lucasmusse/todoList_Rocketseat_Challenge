import styles from "./tasksHeader.module.css"

export function TasksHeader({countTodo, countCompletedtaks }) {
  return (
    <div className={styles.tasksBoard}>
        <div className={styles.taksBoardHeader}>
          <div className={styles.createdTasks}>
            <span className={styles.createdTasks}>
              <b>Tarefas criadas</b>
            </span>{" "}
            <span className={styles.countTasks}>{countTodo}</span>
          </div>
          <div className={styles.doneTasks}>
            <b>Concluídas </b>
            <span className={styles.countTasks}>
              {countCompletedtaks} de {countTodo}
            </span>
          </div>
        </div>
      </div>
  )
}
