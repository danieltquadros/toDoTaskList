import { useEffect, useState } from "react";

// Components
import Header from "./components/Header";
import InputTask from "./components/InputTask";

// Styles
import "./global.css";
import styles from "./App.module.css";

// Interfaces
import * as ITasks from "./interfaces/ITasks";

// Components
import Interactive from "./components/Interactive";
import TaskBoard from "./components/TaskBoard";

function App() {
  const [tasks, setTasks] = useState<ITasks.model[]>([]);
  const [themeName, setThemeName] = useState("Dark");
  const [changeTheme, setChangeTheme] = useState(styles.dark);

  useEffect(() => {
    switch (themeName) {
      case "Dark":
        setChangeTheme(styles.dark);
        break;
      case "Light":
        setChangeTheme(styles.light);
        break;
      default:
        setChangeTheme(styles.dark);
        break;
    }
  }, [themeName]);

  return (
    <div className={`${styles.container} ${changeTheme}`}>
      <Header />
      <div className={styles.developBy}>
        <span>Developed by Daniel T. Quadros</span>
      </div>
      <Interactive themeName={themeName} setThemeName={setThemeName} />
      <InputTask tasks={tasks} setTasks={setTasks} />
      <TaskBoard tasks={tasks} setTasks={setTasks} />
    </div>
  );
}

export default App;
