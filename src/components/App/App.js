import React, { Component } from 'react';

import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import Spotify from '../..util/Spotify'


class App extends React.Component {
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
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
  }

  addTrack(track){
	let addTrackCheck = this.state.playlistTracks.filter((playlistTrack) => playlistTrack.id === track.id);
	if (addTrackCheck.length === 0) {
			this.setState({playlistTracks: [...this.state.playlistTracks, track]});
			} else {alert("It looks like you've alredy added this track!")}
}

removeTrack(track){
	let newListState = this.state.playlistTracks.filter((playlistTrackRemoval) =>
	playlistTrackRemoval.id !== track.id);
	this.setState({playlistTracks: newListState});

}

updatePlaylistName(name) {
  this.setState({playlistName: name});
}

savePlaylist() {
  let trackURIs =[];
}

search(searchTerm) {
  console.log(searchTerm);
}

  render() {
    return (
      <div>
  <h1>Ja<span className="highlight">mmm</span>ing</h1>
  <div className="App">
    <SearchBar onSearch = {this.search}/>
    <div className="App-playlist">
      <SearchResults searchResults = {this.state.searchResults}  />
      <Playlist playlistName = {this.state.playlistName} playlistTracks = {this.state.playlistTracks} onSave = { this.state.savePlaylist }/>
    </div>
  </div>
</div>
    );
  }
}

export default App;
