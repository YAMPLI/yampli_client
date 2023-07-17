import PlaylistEle from './PlaylistEle';
import Player from './Player';
import React from 'react';
import './playlist.style.scss';

const Playlist = () => {
  let tet = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
  return (
    <div className="player-wrap">
      <Player />
      <div className="list-wrap">
        {tet.map((list) => {
          return <PlaylistEle key={list.id}></PlaylistEle>;
        })}
      </div>
    </div>
  );
};

export default Playlist;
