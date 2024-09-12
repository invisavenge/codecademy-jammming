const CLIENT_ID = 'bd6f505e3e1e44b3825e95afd34c7b75';
const REDIRECT_URI = 'http://localhost:3000/';

let url = 'https://accounts.spotify.com/authorize';
url += '?response_type=token';
url += '&client_id=' + encodeURIComponent(CLIENT_ID);
url += '&redirect_uri=' + encodeURIComponent(REDIRECT_URI);

class Spotify {
  constructor() {
    this.accessToken = null;
  }

  getAccessToken() {
    if (this.accessToken) {
      return this.accessToken;
    }

    const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
    const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);

    if (accessTokenMatch && expiresInMatch) {
      this.accessToken = accessTokenMatch[1];
      const expiresIn = Number(expiresInMatch[1]);
      window.setTimeout(() => this.accessToken = '', expiresIn * 1000);
      window.history.pushState('Access Token', null, '/'); // This clears the parameters, allowing us to grab a new access token when it expires.
      console.log(this.accessToken);
      return this.accessToken;
    } else {
      window.location = url;
    }
  }

  async search(term) {
    try {
      const response = await fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`, {
        headers: {
          Authorization: `Bearer ${this.accessToken}` 
        }
      });

      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const json = await response.json();
    
      if (!json.tracks) {
        return [];
      }

      const tracks = json.tracks.items.map(track => {
        return {
          id: track.id,
          name: track.name,
          artist: track.artists[0].name,
          album: track.album.name,
          uri: track.uri
        }
      });

      return tracks;
    } catch (error) {
      console.error(error.message);
    }
  }

  async savePlaylist(name, trackUris) {

  }
}

export default Spotify;
