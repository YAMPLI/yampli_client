import PlaylistEle from './PlaylistEle';
import Player from './Player';
import React, { useEffect } from 'react';
import styles from './playlist.module.scss';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { __getPlaylist } from '../../store/playlistSlice';

const Playlist = () => {
  // 파라미터 전달받기(플레이리스트 id)
  const params = useParams();
  const dispatch = useDispatch();
  const songs = useSelector((state) => state.playlist.list);
  useEffect(() => {
    dispatch(__getPlaylist(params.id));
  }, []);
  return (
    <div className={styles.playerWrap}>
      <Player />
      <div className={styles.listWrap}>
        {songs.map((list) => {
          return (
            <PlaylistEle
              key={list._id}
              url={list.url}
              title={list.title}
              artist={list.artist}
            ></PlaylistEle>
          );
        })}
      </div>
    </div>
  );
};

export default Playlist;
