import { Font, fontSizes, fonts, lineHeights } from './fontStyles';
import {
  FlexItemCenter,
  FlexItemCenterColumn,
  FlexColumn,
  FlexCenter,
  FlexBetween,
  FlexCenterColumn,
} from './flexStyles';
import { CommonMedia } from './commonMediaStyles';

/**
 *  색상 설정
 */
const background = {
  default: '#161a1a', // 유지됨: 전체 페이지의 기본 배경으로 'dark' 색상을 유지
  main: '#333333', // 수정됨: 모달 창 배경을 'charcoalGray'에서 더 어둡게 변경하여 전체 배경과 구분
  footer: '#424346',
  overlay: 'rgba(0, 0, 0, 0.6)', // 추가됨: 모달 오버레이 배경 색상을 불투명도를 증가시켜 추가
};

const text = {
  main: '#FAFAFA', // 유지됨: 기본 텍스트로 'offWhite' 색상을 유지
  sub: '#B0B0B0', // 수정됨: 작은 텍스트에 사용되는 'softGray' 색상을 밝게 변경하여 가독성 향상
  sub1: '#D3D3D3', // sub와 대비
  alert: '#FF3E29', // 유지됨: 경고 및 주의 텍스트에 사용되는 'red' 색상을 유지
};

const button = {
  gradientStart: '#9b2def', // 유지됨: 버튼 그라디언트 시작 색상으로 'lightPurple' 색상을 유지
  gradientEnd: '#2dceef', // 유지됨: 버튼 그라디언트 끝 색상으로 'lightBlue' 색상을 유지
  hoverGradientStart: 'rgba(155, 45, 239, 1)', // 추가됨: 버튼 호버 시 그라디언트 시작 색상을 명시적으로 추가
  hoverGradientEnd: 'rgba(45, 206, 239, 1)', // 추가됨: 버튼 호버 시 그라디언트 끝 색상을 명시적으로 추가
};

const border = {
  border1: '#333333', // input
  border2: '#808080', // input2
  border3: '#99999f', // input Focus
};

const icon = {
  main: '#FAFAFA',
  red: '#FF3E29',
};

const color = {
  background,
  text,
  button,
  border,
  icon,
  charcoalGray: '#3a3a3d', // 플레이 프로그레스바, 선택된 그룹 강조
  dark: '#161a1a', // 헤더, 배경
  darkGray: '#424346', // footer, 비활성 버튼
  lightGray: '#d5d5d5', // view all 버튼 등등 ...
  softGray: '#B0B0B0', // 작은 텍스트, 아티스트, 제목, 좋아요 수 ...
  lightBlue: '#2dceef', // 버튼 그라데이션_2, 경계선, 구분선
  white: '#FFFFFF',
  lightPurple: '#9b2def', // 버튼 그라데이션_1
  offWhite: '#FAFAFA', // 주요 텍스트
  red: '#FF3E29', // 경고
  footerGray: '#808080', // 푸터 작은 텍스트, 사이드바 테두리
};

/**
 *  반응형 미디어 쿼리
 */
const media = {
  mobile: '(max-width: 480px)',
  tablet: '(max-width: 768px)',
  desktop: '(max-width: 1024px)',
  largeDesktop: '(min-width: 1025px)',
};

// 헤더 높이 설정 -> 헤더 고정 값
const headerHeight = {
  height: '3.75rem',
};

/**
 * 텍스트 굵기 설정
 */
const fontWeight = {
  weight5: '500',
  weight6: '600',
  weight7: '700',
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
  fontWeight,
};

export default theme;
