import React from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

class App extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      searchResults: [
        {name: 'track1', artist: 'artist1', album: 'album1', id: 1},
        {name: 'track2', artist: 'artist2', album: 'album2', id: 2},
        {name: 'track3', artist: 'artist3', album: 'album3', id: 3},
      ],
      playlistName: 'My stupid playlist',
      playlistTracks: [
        {name: 'playlistName1', artist: 'playlistArtist1', album: 'playlistlAbum1', id: 4},
        {name: 'playlistName2', artist: 'playlistArtist2', album: 'playlistlAbum2', id: 5},
        {name: 'playlistName3', artist: 'playlistArtist3', album: 'playlistlAbum3', id: 6},
      ],
    };
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults searchResults={ this.state.searchResults } />
            <Playlist playlistName={ this.state.playlistName } playlistTracks={ this.state.playlistTracks } />
          </div>
        </div>
      </div>
    );
  }

}

export default App;