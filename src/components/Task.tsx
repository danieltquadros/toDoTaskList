import { useEffect, useState } from "react";

// Dependencies
import { Trash } from "phosphor-react";

// Interfaces
import * as ITasks from "../interfaces/ITasks";

// Assets
import toCheck from "../assets/tocheck.png";
import checked from "../assets/checked.png";

// Styles
import styles from "./Task.module.css";

// Local interfaces
interface TaskProps {
  specificTask: ITasks.model;
  tasks: ITasks.model[];
  setTasks: (tasks: ITasks.model[]) => void;
}

function Task({ specificTask, tasks, setTasks }: TaskProps) {
  const [newTask, setNewTask] = useState<ITasks.model>(specificTask);

  useEffect(() => {
    let updateStatus = tasks.map((task) => {
      if (task.id === newTask.id) {
        return newTask;
      } else {
        return task;
      }
    });
    setTasks(updateStatus);
  }, [newTask]);

  function handleCheck() {
    setNewTask({
      ...specificTask,
      isComplete: !specificTask.isComplete,
    });
  }

  function handleDelete() {
    const tasksWithoutDeleteOne = tasks.filter((task) => {
      return task.id !== specificTask.id;
    });
    setTasks(tasksWithoutDeleteOne);
  }

  const checkButton = specificTask.isComplete ? checked : toCheck;
  const containerBackground = specificTask.isComplete
    ? styles.backgroundChecked
    : styles.backgroundUnchecked;

  return (
    <div className={`${styles.container} ${containerBackground}`}>
      <div className={styles.checkAndDescription}>
        <button
          title={
            specificTask.isComplete
              ? "Desmarcar como concluída"
              : "Marcar como concluída"
          }
          onClick={handleCheck}
        >
          <img src={checkButton} alt="Check button" />
        </button>
        <div>{specificTask.description}</div>
      </div>
      <button
        title="Excluir"
        className={styles.trashButton}
        onClick={handleDelete}
      >
        <Trash size={20} />
      </button>
    </div>
  );
}

export default Task;
