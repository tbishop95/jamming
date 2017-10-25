const clientId = 'adbcad21aa82433da7bd0a99a541c58e';
const redirectUri = 'http://localhost:3000/';

let accessToken;

const Spotify = {
	getAccessToken() {
		    if (accessToken) {
      return accessToken;
    }

    const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
    const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);
    if (accessTokenMatch && expiresInMatch) {
      accessToken = accessTokenMatch[1];
      const expiresIn = Number(expiresInMatch[1]);
      window.setTimeout(() => accessToken = '', expiresIn * 1000);
      window.history.pushState('Access Token', null, '/'); 
      return accessToken;
    } else {
      const accessUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri}`;
      window.location = accessUrl;
    }
  },

search(term) {
    const accessToken = Spotify.getAccessToken();
    return fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    }).then(response => {
      return response.json();
    }).then(jsonResponse => {
      if (!jsonResponse.tracks) {
        return [];
      }
      return jsonResponse.tracks.items.map(track => ({
        id: track.id,
        name: track.name,
        artist: track.artists[0].name,
        album: track.album.name,
        uri: track.uri
      }));
    });
  },

	savePlaylist(playlist, arrayOfUri) {

		if (!playlist || !arrayOfUri.length) {
			return;
		}
		let userId = '';
		let playlistID = '';
		// let headers = ;
		return fetch('https://cors-anywhere.herokuapp.com/https://api.spotify.com/v1/me', {headers: {Authorization: `Bearer ${accessToken}`}})
				.then(response => response.json())
				.then(jsonResponse => {
						if(!jsonResponse.id) {alert("Please log into Spotify to continue.");}
						else {return userId = jsonResponse.id;}})

				.then(() => {return fetch(`https://cors-anywhere.herokuapp.com/https://api.spotify.com/v1/users/${userId}/playlists`, {
					method: 'POST',
					headers: {Authorization: `Bearer ${accessToken}`, 'Content-type': 'application/json'},
					body: JSON.stringify({name: playlist})})})

				.then(response => response.json())
				.then(jsonResponse => {
					if (!jsonResponse.id) { alert("Wait! You haven't saved your playlist yet.")}

					else {return playlistID = jsonResponse.id}})
				.then(() => {return fetch(`https://cors-anywhere.herokuapp.com/https://api.spotify.com/v1/users/${userId}/playlists/${playlistID}/tracks`, {
					headers:{Authorization: `Bearer ${accessToken}`, 'Content-Type': 'application/json'},
					method: 'POST',
					body: JSON.stringify({uris: arrayOfUri})})})
				.then(response => response.json())
				.then(jsonResponse => {
					if (!jsonResponse) {return alert("We did not detect any tracks in your Playlist.")}
					else {return alert(`The playlist "${playlist}" has been saved to your Spotify account.`)}})
	}
};

export default Spotify;