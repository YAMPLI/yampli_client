import PlaylistEle from './PlaylistEle';
import Player from './Player';
import React, { useEffect, useState } from 'react';
import styles from './playlist.module.scss';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { __getPlaylist } from '../../store/playlistSlice';
import useModal from '../../hooks/useModal';

const Playlist = () => {
  // 파라미터 전달받기(플레이리스트 id)
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { handleOpenModal } = useModal();
  // 모달창 바로 오픈
  const [isOpen, setOpen] = useState(true);

  const songs = useSelector((state) => state.playlist.list);

  // 확인 버튼 클릭 시 action 실행
  useEffect(() => {
    dispatch(__getPlaylist(params.id));
  }, []);

  const onPlaylist = () => {
    // dispatch(__getPlaylist(params.id));
    setOpen(false);
  };

  const goBack = () => {
    navigate(`/group`);
  };
  const open = () => {
    const props = {
      title: '카톡 대화창 캡쳐하기',
      confirmText: '확인',
      cancelText: '그룹 플리 보러가기',
      onConfirm: { onPlaylist },
      onCancel: { goBack },
    };
    handleOpenModal(props);
  };
  return (
    <>
      <button onClick={open}>모달모달</button>
      {/* {isOpen ? (
        <PlaylistModal
          title="카톡 대화창 캡쳐하기"
          confirmText="확인"
          cancelText="그룹 플리 보러가기"
          onConfirm={onPlaylist}
          onCancel={goBack}
        >
          지금 선택한 그룹의 플레이리스트를 사용할까요?
        </PlaylistModal>
      ) : (
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
      )} */}
    </>
  );
};

export default Playlist;
