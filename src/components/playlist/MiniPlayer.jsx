import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  togglePlay,
  setSelectedSong,
  setPlayed,
  setDuration,
  selectPlayerState,
} from '../../store/playerSlice';
import styled from 'styled-components';

const MiniPlayer = () => {
  const dispatch = useDispatch();
  const { isPlaying, selectedSong, played, duration } =
    useSelector(selectPlayerState);

  const handleTogglePlay = () => {
    dispatch(togglePlay());
  };

  return (
    <MiniPlayerContainer>
      {selectedSong ? (
        <>
          <SongInfo>
            <img src={selectedSong.thumb[0]} alt="song thumbnail" />
            <div>
              <h4>{selectedSong.title}</h4>
              <p>{selectedSong.artist}</p>
            </div>
          </SongInfo>
          <ControlButton onClick={handleTogglePlay}>
            {isPlaying ? '⏸️' : '▶️'}
          </ControlButton>
        </>
      ) : (
        <p>No song selected</p>
      )}
    </MiniPlayerContainer>
  );
};

const MiniPlayerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #333;
  color: white;
`;

const SongInfo = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 50px;
    height: 50px;
    object-fit: cover;
    margin-right: 10px;
  }
`;

const ControlButton = styled.button`
  background: transparent;
  border: none;
  font-size: 24px;
  cursor: pointer;
`;

export default MiniPlayer;
