import styles from "./App.module.css";
import { Form, Offer } from "./components";
import logo from "./assets/logo.svg";
import Olympus from "./assets/Olympus.svg";
import cube from "./assets/cube.png";
import hexagon from "./assets/hexagon.png";
import hexagon2 from "./assets/hexagon2.svg";
import ellipse from "./assets/ellipse.png";
import secondEllipse from "./assets/secondEllipse.png";
import { useReducer } from "react";
import { FormContext, formReducer, INITIAL_STATE } from "./store";

const App: React.FC = () => {
  const [state, dispatch] = useReducer(formReducer, INITIAL_STATE);

  return (
    <FormContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      <div className={styles.app}>
        <div className={styles.logoContainer}>
          <img src={logo} alt="logo" className={styles.logo} />
        </div>
        <Offer />
        <div className={styles.olympusContainer}>
          <img src={Olympus} alt="Olympus" className={styles.olympus} />
        </div>
        <img src={cube} alt="cube" className={styles.cube} />
        <img src={ellipse} className={styles.ellipse} />
        <img src={hexagon} alt="hexagon" className={styles.hexagon} />
        <img src={secondEllipse} className={styles.secondEllipse} />
        <img src={hexagon2} alt="hexagon" className={styles.secondHexagon} />
        <Form />
      </div>
    </FormContext.Provider>
  );
};

export default App;
