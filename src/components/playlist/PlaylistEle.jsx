import styled, { css } from 'styled-components';

const PlaylistEle = ({ url, title, artist, thumb, onSongSelect }) => {
  return (
    <PlaylistItemContainer onClick={onSongSelect}>
      <Thumbnail src={thumb}></Thumbnail>
      <ContentContainer>
        <h1>{title}</h1>
        <p>{artist}</p>
      </ContentContainer>
    </PlaylistItemContainer>
  );
};

export default PlaylistEle;

const PlaylistItemContainer = styled.div`
  display: flex;
  height: 60px;
  margin-top: 14px;
  padding-left: 14px;
`;

const Thumbnail = styled.img`
  width: 60px;
  height: 60px;
  background-color: yellow;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 290px;
  padding-left: 14px;
  ${({ theme }) => css`
     {
      ${theme.Font('pretendar')}
    }
  `}
  h1 {
    font-size: 15px;
    color: ${({ theme }) => theme.color.offWhite};
    margin-bottom: 5px;
  }
  p {
    font-size: 14px;
    color: ${({ theme }) => theme.color.softGray};
  }
`;
