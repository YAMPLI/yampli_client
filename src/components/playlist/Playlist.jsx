import PlaylistEle from './PlaylistEle';
import Player from './Player';
import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { __getPlaylist } from '../../store/playlistSlice';
import useModal from '../../hooks/useModal';
import styled from 'styled-components';
import PlayModal from './PlayModal';
import ModalContainer from '../modal/ModalContainer';
const Playlist = () => {
  // 파라미터 전달받기(플레이리스트 id)
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const modals = useModal();
  // const data = useSelector(selectModal);
  const songs = useSelector((state) => state.playlist.list);

  const [modalOpen, setModalOpen] = useState(true);
  // PlaylistEle에서 음악 선택
  const [selectedSong, setSelectedSong] = useState(null);

  // Player로 전달
  const handleSongSelect = (song) => {
    console.log(song);
    setSelectedSong(song);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  // 렌더링 할 때 setOpen 확인해서 모달창 띄워버리기
  // 글로벌 모달창은 경고창에서만 사용하도록 하자

  const data = {
    title: '카톡 대화창 캡쳐하기',
    content: '지금 선택한 플레이리스트를 사용할까요?',
    confirmText: '확인',
    cancelText: '그룹 플리 보러가기',
    playlistId: params.id,
  };

  return (
    <>
      {modalOpen && (
        <ModalContainer>
          <PlayModal data={data} close={closeModal} />
        </ModalContainer>
      )}
      <PlayerWrap>
        <PlayerContent>
          <Player song={selectedSong} />
          <ListWrap>
            {songs.map((list) => (
              <PlaylistEle
                key={list._id}
                url={list.url}
                title={list.title}
                artist={list.artist}
                thumb={list.thumb}
                onSongSelect={() => handleSongSelect(list)}
              />
            ))}
          </ListWrap>
        </PlayerContent>
      </PlayerWrap>
    </>
  );
};

export default Playlist;

const PlayerWrap = styled.div`
  display: block;
  width: 100%;
  height: 100%;
  /* padding: 50px 250px; */
`;

const PlayerContent = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

const ListWrap = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1.5; // 이 값은 나머지 15%에 해당합니다.
  height: auto;
  overflow-y: hidden;
  background-color: ${({ theme }) => theme.color.charcoalGray};
`;
