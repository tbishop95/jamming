import React from 'react';
import TrackList from '../TrackList/TrackList';
import './Playlist.css';

class Playlist extends React.Component {
	constructor(props) {
    super(props);
    this.handleNameChange = this.onNamehandleNameChangeChange.bind(this);
}

	handleNameChange(e) {
		this.props.onNameChange(e.target.value)
	}

  render() {
    return (
    	<div className="Playlist">
  <input onChange="{this.handleNameChange}"/>
  <TrackList tracks = {this.props.playlistTracks} onRemove = { this.props.onRemove }/>
  <a className="Playlist-save" onClick = { this.props.onSave }>SAVE TO SPOTIFY</a>
</div>
    );
  }
}

export default Playlist;