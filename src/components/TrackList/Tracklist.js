import React from 'react';
import './TrackList.css';
import Track from './components/Track/Track';


class TrackList extends Component {
  render() {
    return (
    	<div className="TrackList">
    <!-- You will add a map method that renders a set of Track components  -->
    { this.props.tracks.map(track => {
          return (
            <Track track={ track } key={track.id} />
          );
        }) }
</div>
    );
  }
}

export default TrackList;