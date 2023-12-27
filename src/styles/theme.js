import {
  FlexItemCenter,
  FlexItemCenterColumn,
  FlexColumn,
  FlexCenter,
  FlexBetween,
  FlexCenterColumn,
} from './flexStyles';
import { CommonMedia } from './commonMediaStyles';

const colors = {
  dark: '#161a1a',
  charcoalGray: '#333333',
  darkGray: '#424346',
  softGray: '#B0B0B0',
  lightGray: '#d5d5d5',
  white: '#FFFFFF',
  offWhite: '#FAFAFA',
  red: '#FF3E29',
  lightBlue: '#2dceef',
  lightPurple: '#9b2def',
  footerGray: '#808080',
};

// 컨텍스트에 따른 색상 구조화
const themeColors = {
  background: {
    default: colors.dark,
    main: colors.charcoalGray,
    footer: colors.darkGray,
    overlay: 'rgba(0, 0, 0, 0.6)',
  },
  text: {
    main: colors.offWhite,
    sub: colors.softGray,
    sub1: '#D3D3D3',
    alert: colors.red,
    success: colors.lightBlue,
  },
  button: {
    gradientStart: colors.lightPurple,
    gradientEnd: colors.lightBlue,
    hoverGradientStart: 'rgba(155, 45, 239, 1)',
    hoverGradientEnd: 'rgba(45, 206, 239, 1)',
  },
  border: {
    border1: colors.charcoalGray,
    border2: colors.footerGray,
    border3: '#99999f',
  },
  icon: {
    main: colors.offWhite,
    red: colors.red,
  },
  // 추가적인 색상 관련 구조화는 필요에 따라 진행
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
  // color,
  FlexItemCenter,
  FlexCenter,
  FlexColumn,
  FlexBetween,
  FlexItemCenterColumn,
  FlexCenterColumn,
  media,
  headerHeight,
  CommonMedia,
  fontWeight,
  color: themeColors,
};

export default theme;
