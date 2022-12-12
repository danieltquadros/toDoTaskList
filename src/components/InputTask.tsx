import { ChangeEvent, FormEvent, useState } from "react";

// Dependencies
import { PlusCircle } from "phosphor-react";
import { v4 as uuidv4 } from "uuid";

// Interfaces
import * as ITasks from "../interfaces/ITasks";

// Styles
import styles from "./InputTask.module.css";

// Local interfaces
interface InputTaskProps {
  tasks: ITasks.model[];
  setTasks: (tasks: ITasks.model[]) => void;
}

function InputTask({ tasks, setTasks }: InputTaskProps) {
  const [description, setDescription] = useState("");

  function handleInputDescription(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity("");
    setDescription(event.target.value);
  }

  function handleNewTask(event: FormEvent) {
    event.preventDefault();
    setTasks([
      {
        id: uuidv4(),
        description: description,
        isComplete: false,
      },
      ...tasks,
    ]);
    setDescription("");
  }

  return (
    <form onSubmit={handleNewTask} className={styles.container}>
      <input
        value={description}
        type="text"
        placeholder="Adicione uma nova tarefa"
        onChange={handleInputDescription}
      />
      <button type="submit" disabled={description === ""}>
        Criar
        <PlusCircle size={20} />
      </button>
    </form>
  );
}

export default InputTask;
