import React from "react";
import { PlayIcon } from '@heroicons/react/24/solid'
import { HeartIcon, EllipsisHorizontalIcon } from '@heroicons/react/24/outline'

function PlaylistActions() {
  return (
    <div className="actions-container">
      <button className="action-button" id="play">
        <PlayIcon id="play-icon"/>
      </button>
      <button className="action-button">
        <HeartIcon />
      </button>
      <button className="action-button">
        <EllipsisHorizontalIcon />
      </button>
    </div>
  )
}

export default PlaylistActions;