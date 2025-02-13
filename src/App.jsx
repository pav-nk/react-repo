import React, { useState, useEffect } from "react";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Movies from "./components/Movies";
import Preloader from "./components/Preloader";
import Search from "./components/Search";

const API_KEY = process.env.REACT_APP_API_KEY;

function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchCards = (value = "matrix", type = "all") => {
    setLoading(true);
    const typeStr =
      type === "all" ? "" : type === "movie" ? "&type=movie" : "&type=series";
    fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${value}${typeStr}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setMovies(data.Search);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchCards();
  }, []);

  return (
    <>
      <Header />
      <main className="content">
        <div className="container">
          <Search fetchCards={fetchCards} />
          {loading ? <Preloader /> : <Movies movies={movies} />}
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
