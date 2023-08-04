import PlaylistEle from './PlaylistEle';
import Player from './Player';
import React, { useEffect, useState } from 'react';
import styles from './playlist.module.scss';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { __getPlaylist } from '../../store/playlistSlice';
import useModal from '../../hooks/useModal';
import { selectModal } from '../../store/modalSlice';

const Playlist = () => {
  // 파라미터 전달받기(플레이리스트 id)
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const modals = useModal();
  const data = useSelector(selectModal);
  const songs = useSelector((state) => state.playlist.list);

  const open = () => {
    const data = {
      type: 'playerModal',
      props: {
        title: '카톡 대화창 캡쳐하기',
        content: '지금 선택한 플레이리스트를 사용할까요?',
        confirmText: '확인',
        cancelText: '그룹 플리 보러가기',
      },
      playlistId: params.id,
    };

    modals.modalOpen(data);
  };

  // 확인 버튼 클릭 시 action 실행
  useEffect(() => {
    open();
  }, []);

  return (
    <>
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
    </>
  );
};

export default Playlist;
