import React, { useEffect, useState } from "react";
import { HeartIcon } from "@heroicons/react/24/outline";
import prettyMilliseconds from 'pretty-ms';
import { toast } from "react-hot-toast";

function PlaylistSong({index, track, added_at}) {

  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    setLiked(!liked)
  }

  useEffect(() => {
    if (liked) {
      toast.success('Song added to favorites!', {
        id: 'liked'
      })
    } else {
      toast.error('Song removed from favorites', {
        id: 'liked'
      })
    }
  }, [liked])

  return (
    <tr className="song-container" key={track.id}>
            <td>{index + 1}</td>
            <td>
            <span className="song-title">
              <img
                className="song-img"
                src={track.album.images?.[0]?.url}
                alt="song-1"
              />
              <span className="song-title-sub">
                <span className="text-white text-14 bold">{track.name}</span>
                <span className="text-gray">{track.artists?.[0]?.name}</span>
              </span>
            </span>
            </td>
            <td className="text-gray text-14 table-cell">{track.album.name}</td>
            <td className="text-gray text-14 table-cell">
              {new Date(added_at)?.toLocaleDateString("en-US", {
                month: "long",
                year: "numeric",
                day: "numeric",
                timeZone: "UTC",
              })}
            </td>
            <td className="text-gray text-14 table-cell relative">
              <span>
                <button
                  className={`like-button ${liked ? 'block' : 'hidden'}`}
                  type="button"
                  onClick={() => handleLike(track.id)}
                >
                  <HeartIcon />
                </button>
              </span>
              {prettyMilliseconds(track.duration_ms, {colonNotation: true, secondsDecimalDigits: 0})}
            </td>
          </tr>
  )
}

export default PlaylistSong;