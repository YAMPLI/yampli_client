import { Font, fontSizes, fonts, lineHeights } from './fontStyles';
import {
  FlexItemCenter,
  FlexCenter,
  FlexColumn,
  FlexBetween,
  FlexItemCenterColumn,
  FlexCenterColumn,
} from './flexStyles';
import { CommonMedia } from './commonMediaStyles';

const color = {
  charcoalGray: '#3a3a3d', // 플레이 프로그레스바, 선택된 그룹 강조
  dark: '#161a1a', // 헤더, 배경
  darkGray: '#424346', // footer, 비활성 버튼
  deepGray: '#303033', // 그룹 리스트
  lightGray: '#d5d5d5', // view all 버튼 등등 ...
  softGray: '#99999f', // 작은 텍스트, 아티스트, 제목, 좋아요 수 ...
  mediumBlue: '#2d9bef',
  lightBlue: '#2dceef', // 버튼 그라데이션_2, 경계선, 구분선
  white: '#FFFFFF',
  lightPurple: '#9b2def', // 버튼 그라데이션_1
  offWhite: '#FAFAFA', // 주요 텍스트
  red: '#FF3E29', // 경고
  footerGray: '#808080', // 푸터 작은 텍스트, 사이드바 테두리
};

const gradient = {
  lightPurpleToBlue: `linear-gradient(to right, ${color.lightPurple}, ${color.lightBlue})`,
};

// 반응형 미디어 쿼리
const media = {
  mobile: '(max-width: 480px)',
  tablet: '(max-width: 768px)',
  desktop: '(max-width: 1024px)',
  largeDesktop: '(min-width: 1025px)',
};

// 헤더 높이 설정 -> 헤더 고정 값
const headerHeight = {
  height: '60px',
};

const theme = {
  color,
  FlexItemCenter,
  FlexCenter,
  FlexColumn,
  FlexBetween,
  FlexItemCenterColumn,
  FlexCenterColumn,
  media,
  headerHeight,
  CommonMedia,
  Font,
  fontSizes,
  fonts,
  lineHeights,
  gradient,
};

export default theme;
