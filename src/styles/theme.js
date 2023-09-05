import { Font } from './fontStyles';
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
  dark: '#161a1a', // 헤더, 배경
  deepGray: '#303033', // 그룹 리스트
  lightGray: '#d5d5d5', // view all 버튼 등등 ...
  charcoalGray: '#3a3a3d', // 플레이 프로그레스바, 선택된 그룹 강조
  softGray: '#99999f', // 작은 텍스트, 아티스트, 제목, 좋아요 수 ...
  lightBlue: '#2dceef', // 경계선, 구분선
  mediumBlue: '#2d9bef',
  lightPurple: '#9b2def',
  darkGray: '#424346', // footer, 비활성 버튼
  white: '#FFFFFF',
  offWhite: '#FAFAFA', // 주요 텍스트
  red: '#FF3E29', // 경고
};

const media = {
  mobile: '(max-width: 480px)',
  tablet: '(max-width: 768px)',
  desktop: '(max-width: 1024px)',
  largeDesktop: '(min-width: 1025px)',
};

const headerHeight = {
  height: '55px',
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
};

export default theme;
/* Color Theme Swatches in Hex */
