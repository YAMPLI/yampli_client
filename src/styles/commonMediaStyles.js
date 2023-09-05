import { css } from 'styled-components';

export const CommonMedia = css`
  // 모바일 스타일
  @media ${({ theme }) => theme.media.mobile} {
    padding: 15px 10px;
  }

  // 태블릿 스타일
  @media ${({ theme }) => theme.media.tablet} {
    padding: 15px 30px;
  }

  // 데스크탑 스타일
  @media ${({ theme }) => theme.media.desktop} {
    padding: 15px 150px;
  }

  // 큰 데스크탑 스타일
  @media ${({ theme }) => theme.media.largeDesktop} {
    padding: 0px 200px;
  }
`;
