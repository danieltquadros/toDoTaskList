import { useState } from "react";

// Assets
import sun from "../assets/sun.png";
import moon from "../assets/moon.png";

// Styles
import styles from "./Interactive.module.css";

// Local interfaces
interface InteractiveProps {
  themeName: string;
  setThemeName: (theme: string) => void;
}

function Interactive({ themeName, setThemeName }: InteractiveProps) {
  const [imageTheme, setImageTheme] = useState(sun);

  function handleTheme() {
    switch (themeName) {
      case "Dark":
        setThemeName("Light");
        setImageTheme(moon);
        break;
      case "Light":
        setThemeName("Dark");
        setImageTheme(sun);
        break;
      default:
        setThemeName("Dark");
        setImageTheme(moon);
        break;
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.circleContainer}>
        <div className={styles.colorCircle} onClick={handleTheme}>
          <img src={imageTheme} alt="Tema" />
        </div>
      </div>
    </div>
  );
}

export default Interactive;
