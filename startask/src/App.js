import "./App.css";
import FilmSlider from "./components/filmSlider";
import styles from './App.style';

function App() {
  return (
    <>
     
      <h1 style={styles.header} className="logo">
        Star wars films
      </h1>
      <FilmSlider />
    </>
  );
}

export default App;
