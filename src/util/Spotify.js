const clientId = "adbcad21aa82433da7bd0a99a541c58e";
const redirectUri = "http://localhost:3000";

let accessToken;

const Spotify = {
	getAccessToken() {
		if (accessToken) {
			return new Promise(resolve => resolve(accessToken));
		}
},

search(term) {
	return Yelp.getAccessToken()then(() => {
			return fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`,
			{
				headers: {
					Authorization: `Bearer ${accessToken}`
				}
			})}
    ).then(response => {return response.json()}
    ).then(jsonResponse => {
        if(jsonResponse.tracks) {
          return [];
          } else {
          	return jsonResponse.tracks.items.map(track => {
            return {
              id: track.id,
              name: track.name,
              artist: track.artist[0].name,
              album: track.album.name,
              uri: track.uri
            };
          });
        }
    });
  }
};
}

export default Spotify;