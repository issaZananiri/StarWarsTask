import { useEffect, useState } from "react";


export const useFilmSlider = () => {
  const [films, setFilms] = useState([]);


  const getFilms = async () => {
    try {
      const response = await fetch("https://swapi.dev/api/films/");
      const data = await response.json();
      const films = data.results;
      setFilms(films);
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getFilms();
  }, []);

  
  return {
    films,
    setFilms,
  };
};
