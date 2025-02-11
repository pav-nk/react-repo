import React from "react";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Movies from "./components/Movies";
import Preloader from "./components/Preloader";
import Search from "./components/Search";

const API_KEY = process.env.REACT_APP_API_KEY;

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      loading: true,
    };
    this.fetchCards = this.fetchCards.bind(this);
  }

  fetchCards(value = "matrix", type = "all") {
    this.setState({ loading: true });
    const typeStr =
      type === "all" ? "" : type === "movie" ? "&type=movie" : "&type=series";
    fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${value}${typeStr}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({ movies: data.Search, loading: false });
      });
  }

  componentDidMount() {
    this.fetchCards();
  }

  render() {
    return (
      <>
        <Header />
        <main className="content">
          <div className="container">
            <Search fetchCards={this.fetchCards} />
            {this.state.loading ? (
              <Preloader />
            ) : (
              <Movies movies={this.state.movies} />
            )}
          </div>
        </main>
        <Footer />
      </>
    );
  }
}
