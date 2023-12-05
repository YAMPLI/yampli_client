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
  height: 3.75rem;
  margin-top: 1.25rem;
  padding-left: 0.875rem;
`;

const Thumbnail = styled.img`
  width: 3.75rem;
  height: 3.75rem;
`;

const ContentContainer = styled.div`
  ${(props) => props.theme.FlexCenter}
  flex-direction: column;
  width: auto;
  padding-left: 0.875rem;
  h1 {
    color: ${(props) => props.theme.color.text.main};
    margin-bottom: 0.25rem;
  }
  p {
    font-size: 0.875rem;
    color: ${(props) => props.theme.color.text.sub};
  }
`;
