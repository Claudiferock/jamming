import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.search = this.search.bind(this);
    this.handleTermChange = this.handleTermChange.bind(this);
  }

  search() {
    this.props.search(this.state.query);
  }

  handleTermChange(event) {
    this.setState({
      query: event.target.value
    });
  }

  render() {
    return(
      <div className="SearchBar">
        <input 
          placeholder='Enter a song, album or artist'
          onChange={ this.handleTermChange } />
        <button className="SearchButton">SEARCH</button>
      </div>  
    );
  }
}

export default SearchBar;