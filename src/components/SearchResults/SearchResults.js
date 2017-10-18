import React from 'react';
import './SearchResults.css';
import TrackList from './components/TrackList/TrackList';

class SearchResults extends Component {
  render() {
    return (
    	<div className="SearchResults">
  <h2>Results</h2>
  <TrackList />
</div>
    );
  }
}

export default SearchResults;