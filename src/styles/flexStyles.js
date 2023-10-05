import { css } from 'styled-components';

// 아이템 가운데 정렬 (가로, 세로)
export const FlexItemCenter = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

// 아이템 가운데 정렬 (가로,세로) + 세로 방향
export const FlexItemCenterColumn = css`
  ${FlexItemCenter}
  flex-direction: column;
`;

// Flex 요소를 세로 방향으로 정렬
export const FlexColumn = css`
  flex-direction: column;
`;

// 아이템 가운데 정렬 (가로)
export const FlexCenter = css`
  display: flex;
  justify-content: center;
`;

// 아이템 가운데 정렬 (가로) + 세로 방향
export const FlexCenterColumn = css`
  ${FlexCenter}
  flex-direction: column;
`;

// 아이템을 양쪽 끝으로 정렬
export const FlexBetween = css`
  display: flex;
  justify-content: space-between;
`;
