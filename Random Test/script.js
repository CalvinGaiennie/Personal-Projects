// Function to fetch The Beatles artist ID
const fetchBeatlesArtist = async () => {
  try {
    const response = await fetch(
      "https://musicbrainz.org/ws/2/artist?query=The%20Beatles&fmt=json"
    );
    const data = await response.json();
    const beatles = data.artists.find(
      (artist) => artist.name === "The Beatles"
    );
    return beatles ? beatles.id : null;
  } catch (error) {
    console.error("Error fetching Beatles artist:", error);
    return null;
  }
};

// Function to fetch albums of The Beatles
const fetchBeatlesAlbums = async (artistId) => {
  try {
    const response = await fetch(
      `https://musicbrainz.org/ws/2/artist/${artistId}/releases?fmt=json`
    );
    const data = await response.json();
    return data.releases || [];
  } catch (error) {
    console.error("Error fetching Beatles albums:", error);
    return [];
  }
};

// Function to fetch songs in a specific album
const fetchAlbumSongs = async (releaseId) => {
  try {
    const response = await fetch(
      `https://musicbrainz.org/ws/2/release/${releaseId}?inc=recordings&fmt=json`
    );
    const data = await response.json();
    return data.recordings || [];
  } catch (error) {
    console.error("Error fetching album songs:", error);
    return [];
  }
};

// Function to display album and song data
const displayData = async (albums) => {
  const container = document.getElementById("beatles-data");
  container.innerHTML = "";

  for (const album of albums) {
    const albumDiv = document.createElement("div");
    albumDiv.className = "album";

    const albumTitle = document.createElement("h2");
    albumTitle.textContent = album.title;
    albumDiv.appendChild(albumTitle);

    const songs = await fetchAlbumSongs(album.id);
    if (songs.length > 0) {
      const songList = document.createElement("ul");

      songs.forEach((song) => {
        const songItem = document.createElement("li");
        songItem.className = "track";
        songItem.textContent = song.title;
        songList.appendChild(songItem);
      });

      albumDiv.appendChild(songList);
    }

    container.appendChild(albumDiv);
  }
};

// Main function to fetch and display data
const fetchBeatlesData = async () => {
  const artistId = await fetchBeatlesArtist();
  if (artistId) {
    const albums = await fetchBeatlesAlbums(artistId);
    if (albums.length > 0) {
      await displayData(albums);
    } else {
      document.getElementById("beatles-data").innerHTML =
        "<p>No albums found.</p>";
    }
  } else {
    document.getElementById("beatles-data").innerHTML =
      "<p>Artist not found.</p>";
  }
};

// Execute the main function
fetchBeatlesData();
