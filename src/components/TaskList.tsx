// Components
import Task from "./Task";

// Interfaces
import * as ITasks from "../interfaces/ITasks";

// Assets
import clipBoard from "../assets/clipboard.png";

// Styles
import styles from "./TaskList.module.css";

// Local interfaces
interface TaskListProps {
  tasks: ITasks.model[];
  setTasks: (tasks: ITasks.model[]) => void;
}

function TaskList({ tasks, setTasks }: TaskListProps) {
  return (
    <>
      {tasks.length > 0 ? (
        tasks.map((specificTask) => {
          return (
            <Task
              key={specificTask.id}
              specificTask={specificTask}
              tasks={tasks}
              setTasks={setTasks}
            />
          );
        })
      ) : (
        <div className={styles.isEmptyContainer}>
          <div className={styles.divider} />
          <img src={clipBoard} alt="Prancheta" />
          <p className={styles.isEmptyFirstText}>
            Você ainda não tem tarefas cadastradas
          </p>
          <p>Crie tarefas e organize seus itens</p>
        </div>
      )}
    </>
  );
}

export default TaskList;
