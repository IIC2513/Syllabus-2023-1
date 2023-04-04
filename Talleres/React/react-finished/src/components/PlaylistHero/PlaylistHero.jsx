import React from "react";

function PlaylistHero({data: { name, likes, songs, hours, minutes }}) {
  return (
    <div className="info-container">
      <div className="img-container">
        <img
          src="https://i.scdn.co/image/ab67706c0000da8469856b1630c65cd74254bd23"
          alt="playlist-img"
          className="img-title"
        />
      </div>
      <div className="description">
        <h3>Public Playlist</h3>
        <h1>{name}</h1>
        <p>{likes} likes • {songs} songs • {hours}hr {minutes}min</p>
      </div>
    </div>
  )
}

export default PlaylistHero;