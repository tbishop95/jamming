import React from 'react';
import './Playlist.css';
import TrackList from './components/TrackList/TrackList';

class Playlist extends Component {
  render() {
    return (
    	<div className="Playlist">
  <input defaultValue="{'New Playlist'}"/>
  <TrackList />
  <a className="Playlist-save">SAVE TO SPOTIFY</a>
</div>
    );
  }
}

export default Playlist;