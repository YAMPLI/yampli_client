import styled, { ThemeProvider } from 'styled-components';
import theme from '../../styles/theme';
import { ToastPortal } from './Portal';
import Icon from '../icons';
import Text from './Text';

const Toast = ({ toasts, deleteToast }) => {
  return (
    <ThemeProvider theme={theme}>
      <ToastPortal>
        <ToastContainer>
          {toasts.map((toast) => {
            return (
              <ToastWrapper
                key={toast.id}
                onClick={() => deleteToast(toast.id)}
                type={toast.type}
              >
                <ToastIcon type={toast.type} name="AlertIcon"></ToastIcon>
                <ToastText>{toast.text}</ToastText>
              </ToastWrapper>
            );
          })}
        </ToastContainer>
      </ToastPortal>
    </ThemeProvider>
  );
};

export default Toast;

const ToastContainer = styled.div`
  position: fixed;
  right: 0;
  top: 10%;
  min-width: 30%;
  max-width: 35%;
`;

const ToastWrapper = styled.div`
  ${({ theme }) => theme.FlexItemCenter}
  background-color: ${(props) => props.theme.color.background.main};
  padding: 1rem 1rem;
  margin-right: 2rem;
  border-radius: 8px;
  margin-bottom: 15px;
`;

const ToastIcon = styled(Icon).attrs({
  color: 'red',
  width: '1rem',
  height: '1rem',
})`
  display: ${(props) => (props.type === 'success' ? 'none' : 'block')};
  min-width: 40px;
  margin-right: 5px;
`;

const ToastText = styled(Text).attrs({
  font: 'small',
  color: 'offWhite',
})``;
