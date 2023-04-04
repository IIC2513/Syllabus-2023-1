import React from "react";
import { ClockIcon } from "@heroicons/react/24/outline";
import PlaylistSong from "../PlaylistSong/PlaylistSong";

function PlaylistTable({ data }) {
  const { items } = data;

  return (
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>Album</th>
          <th>Date added</th>
          <th><ClockIcon id="clock"/></th>
        </tr>
      </thead>
      <tbody>
        {items.map(({ track, added_at }, index) => (
          <PlaylistSong track={track} added_at={added_at} index={index} key={index} />
        ))}
      </tbody>
    </table>
  )
}

export default PlaylistTable;