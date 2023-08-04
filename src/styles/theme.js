import { Font } from './fontStyles';
import { MoveCenter, FlexCenter, FlexColumn, FlexBetween } from './flexStyles';

const color = {
  lightBlue: '#21FFDB',
  black: '#1E1E1E',
  lightOrange: '#FF9300',
  darkGray: '#2E2E2E',
  white: '#FFFFFF',
};
const media = {
  half: '(max-width: 800px)',
  full: '(min-width: 801px)',
};
const theme = {
  color,
  MoveCenter,
  FlexCenter,
  FlexColumn,
  FlexBetween,
  media,
  Font,
};

export default theme;
