import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import SearchResults from './components/SearchResults/SearchResults';
import Playlist from './components/Playlist/Playlist';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchResults: [ 
        {name: 'Did You See', artist: 'J Hus', album: 'Common Sense'},
        {name: 'Glory Days', artist: 'Just Jack', album: 'Overtones'},
        {name: 'Re-Wired', artist: 'Kasabian', album: 'Velociraptor'}
      ],
      playlistName: 'My list',
      playlistTracks:
      [ {name: 'Biblical', artist: 'Biffy Clyro', album: 'Opposites (Deluxe)'},
        {name: 'Hook', artist: 'Blues Traveler', album: 'Cover Yourself'},
        {name: 'Magic', artist: 'Coldplay', album: 'Ghost Stories'}
      ]
    };
  }

  render() {
    return (
      <div>
  <h1>Ja<span className="highlight">mmm</span>ing</h1>
  <div className="App">
    <SearchBar />
    <div className="App-playlist">
      <SearchResults searchResults = {this.state.searchResults}  />
      <Playlist playlistName = {this.state.playlistName} playlistTracks = {this.state.playlistTracks}/>
    </div>
  </div>
</div>
    );
  }
}

export default App;
