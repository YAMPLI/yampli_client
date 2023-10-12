import PlaylistEle from './PlaylistEle';
import Player from './Player';
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { __getPlaylist } from '../../store/playlistSlice';
import styled from 'styled-components';
import PlayModal from './PlayModal';
import ModalContainer from '../modal/ModalContainer';
import { selectPlaylistState } from '../../store/playlistSlice';
import { setSelectedSong, selectPlayerState } from '../../store/playerSlice';

const Playlist = () => {
  // 파라미터 전달받기(플레이리스트 id)
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // 음악 리스트 가져오기
  // const songs = useSelector((state) => state.playlist.list);
  const { songList, isShowSongList } = useSelector(selectPlaylistState);
  const [modalOpen, setModalOpen] = useState(true);

  // playerSlice에서 selectedSong 값만 가져온다. useEffect로 인해서 0번째 노래가 저장된다.
  const { selectedSong } = useSelector(selectPlayerState);

  // Player로 노래 리스트 전달
  const handleSongSelect = (song) => {
    dispatch(setSelectedSong(song));
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  // SelectedSong 상태를 리스트의 첫 번째 노래로 변경.
  useEffect(() => {
    console.log(songList.length);
    if (songList && songList.length > 0) {
      dispatch(setSelectedSong(songList[0]));
    }
  }, [songList, dispatch]);

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
    <PlaylistPageContainer className="playlistPageContainer">
      {modalOpen && (
        <ModalContainer>
          <PlayModal data={data} close={closeModal} />
        </ModalContainer>
      )}
      {!modalOpen && (
        <>
          <PlayerContainer className="playerContainer">
            <PlayerWrap className="playerWrap">
              <Player song={selectedSong} />
            </PlayerWrap>
            <PlayerListContainer>
              {isShowSongList && (
                <ListWrap showMenu={isShowSongList}>
                  {songList.map((list) => (
                    <PlaylistEle
                      key={list._id}
                      url={list.url}
                      title={list.title}
                      artist={list.artist}
                      thumb={list.thumb[2]}
                      onSongSelect={() => handleSongSelect(list)}
                    />
                  ))}
                </ListWrap>
              )}
            </PlayerListContainer>
          </PlayerContainer>
        </>
      )}
    </PlaylistPageContainer>
  );
};

export default Playlist;

const PlaylistPageContainer = styled.div`
  display: flex;
  padding: 0px 10px;
  height: 100%;
`;

const PlayerContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  /* width: 1000px; */
  /* height: 1000px; */
`;

const PlayerWrap = styled.div`
  width: 100%;
  height: 100%;
`;
const PlayerListContainer = styled.div`
  position: relative;
  /* display: ${({ showMenu }) => (showMenu ? 'block' : 'none')}; */
  /* display: flex; */
  /* flex-direction: column; */
`;
const ListWrap = styled.div`
  display: ${({ showMenu }) => (showMenu ? 'block' : 'none')};
  height: 100%;
  overflow-y: hidden;
  background-color: ${({ theme }) => theme.color.charcoalGray};
`;
