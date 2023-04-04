import React from "react";
import './playlist.css';
import PlaylistHero from "../../components/PlaylistHero/PlaylistHero.jsx";
import PlaylistActions from "../../components/PlaylistActions/PlaylistActions.jsx";
import PlaylistTable from "../../components/PlaylistTable/PlaylistTable.jsx";
import songs from '../../utils/data.json';

function Playlist() {
  const information = {
    name: 'In my Britney era',
    likes: 3456,
    songs: 298,
    hours: 10,
    minutes: 55,
  }

  return (
    <main>
      <PlaylistHero data={information} />
      <PlaylistActions />
      <PlaylistTable data={songs} />
    </main>
  )
}

export default Playlist;