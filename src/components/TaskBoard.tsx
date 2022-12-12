// Components
import TaskList from "./TaskList";

// Interfaces
import * as ITasks from "../interfaces/ITasks";

// Styles
import styles from "./TaskBoard.module.css";

// Local interfaces
interface TaskBoardProps {
  tasks: ITasks.model[];
  setTasks: (tasks: ITasks.model[]) => void;
}

function TaskBoard({ tasks, setTasks }: TaskBoardProps) {
  const finishedTasks = tasks.filter((task) => {
    return task.isComplete;
  });

  return (
    <main className={styles.container}>
      <div className={styles.containerTaskBoard}>
        <header className={styles.header}>
          <div className={styles.tasksHeader}>
            <span className={styles.createdTasksText}>Tarefas criadas</span>
            <span className={styles.tasksNumber}>{tasks.length}</span>
          </div>
          <div className={styles.tasksHeader}>
            <span className={styles.finishedTasksText}>Concluidas</span>
            <span className={styles.tasksNumber}>
              {finishedTasks.length} de {tasks.length}
            </span>
          </div>
        </header>
        <TaskList tasks={tasks} setTasks={setTasks} />
      </div>
    </main>
  );
}

export default TaskBoard;
