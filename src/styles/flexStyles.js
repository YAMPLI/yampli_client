import { css } from 'styled-components';

// 기본 Flex 설정
const FlexDisplay = css`
  display: flex;
`;

// 가운데 정렬 (수평, 수직)
const CenterAlign = css`
  align-items: center;
  justify-content: center;
`;

// Flex 요소를 열 방향으로 정렬
const ColumnDirection = css`
  flex-direction: column;
`;

// 기본 Flex + 가운데 정렬
export const FlexItemCenter = css`
  ${FlexDisplay}
  ${CenterAlign}
`;

// Flex 가운데 정렬 + 열 방향
export const FlexItemCenterColumn = css`
  ${FlexItemCenter}
  ${ColumnDirection}
`;

// Flex 요소를 열 방향으로 정렬
export const FlexColumn = css`
  ${FlexDisplay}
  ${ColumnDirection}
`;

// 가운데 정렬 (수평)
export const FlexCenter = css`
  ${FlexDisplay}
  justify-content: center;
`;

// Flex 가운데 정렬 (수평) + 열 방향
export const FlexCenterColumn = css`
  ${FlexCenter}
  ${ColumnDirection}
`;

// 양쪽 끝 정렬
export const FlexBetween = css`
  ${FlexDisplay}
  justify-content: space-between;
`;
