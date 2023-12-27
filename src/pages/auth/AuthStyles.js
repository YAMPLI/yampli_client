import styled from 'styled-components';

const AuthContainer = styled.div`
  ${(props) => props.theme.FlexItemCenter}
  min-width:6.25rem;
  padding: 8.125rem 0;
`;

const AuthBox = styled.div`
  padding: 1.875rem 1.25rem;
  width: 25rem;
  border: 2px solid ${(props) => props.theme.color.charcoalGray};
  text-align: center;
  overflow: hidden;
`;

const AuthButtonWrapper = styled.div`
  ${(props) => props.theme.FlexItemCenterColumn}
  margin: 2.75rem 0;
  gap: 0.625rem; // 상하좌우 여백
`;

const authStyles = {
  AuthContainer,
  AuthBox,
  AuthButtonWrapper,
};

export default authStyles;
