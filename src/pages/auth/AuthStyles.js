import styled from 'styled-components';
import Text from '../../components/common/Text';

const AuthContainer = styled.div`
  ${(props) => props.theme.FlexItemCenter}
  min-width:100px;
  padding: 130px 0;
`;

const AuthBox = styled.div`
  padding: 30px 20px;
  width: 400px;
  border: 2px solid ${(props) => props.theme.color.charcoalGray};
  text-align: center;
  overflow: hidden;
`;

const AuthTitle = styled(Text).attrs({
  size: '22px',
})`
  line-height: 35px;
  margin: 20px 0;
`;
const AuthButtonWrapper = styled.div`
  ${(props) => props.theme.FlexItemCenterColumn}
  margin: 45px 0;
  gap: 10px; // 상하좌우 여백
`;

const authStyles = {
  AuthContainer,
  AuthBox,
  AuthTitle,
  AuthButtonWrapper,
};

export default authStyles;
