import React from "react";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
    this.state = {
      search: "",
      type: "",
    };
  }

  handleSubmit = (evt) => {
    if (evt.keyCode !== 13 && evt.keyCode) {
      return;
    }
    this.props.fetchCards(this.state.search, this.state.type);
    this.inputRef.current.focus();
  };

  handleTypeChange = (evt) => {
    this.setState(
      () => ({ type: evt.target.value }),
      () => {
        this.props.fetchCards(this.state.search, this.state.type);
      }
    );
    this.inputRef.current.focus();
  };

  componentDidMount() {
    this.inputRef.current.focus();
    this.setState({ type: "all" });
  }

  render() {
    return (
      <>
        <div className="row">
          <div className="input-field">
            <input
              className="validate"
              placeholder="search"
              ref={this.inputRef}
              type="search"
              value={this.state.search}
              onKeyDown={this.handleSubmit}
              onChange={(evt) => this.setState({ search: evt.target.value })}
            />
            <button className="btn search-btn" onClick={this.handleSubmit}>
              Search
            </button>
          </div>
        </div>
        <div className="row">
          <form action="#" className="filter">
            <label>
              <input
                name="filter"
                className="with-gap"
                type="radio"
                value="all"
                checked={this.state.type === "all"}
                onChange={this.handleTypeChange}
              />
              <span>All</span>
            </label>
            <label>
              <input
                name="filter"
                className="with-gap"
                type="radio"
                value="movie"
                checked={this.state.type === "movie"}
                onChange={this.handleTypeChange}
              />
              <span>Movies</span>
            </label>
            <label>
              <input
                name="filter"
                className="with-gap"
                type="radio"
                value="series"
                checked={this.state.type === "series"}
                onChange={this.handleTypeChange}
              />
              <span>Series</span>
            </label>
          </form>
        </div>
      </>
    );
  }
}

export default Search;
