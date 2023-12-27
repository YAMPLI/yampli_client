import styled, { ThemeProvider } from 'styled-components';
import theme from '../../styles/theme';
import { ToastPortal } from './Portal';
import Icon from '../icons';

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
                <span>{toast.text}</span>
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
  ${(props) => props.theme.FlexItemCenter}
  background-color: ${(props) => props.theme.color.background.main};
  padding: 1rem 1.125rem;
  margin-right: 2rem;
  border-radius: 0.5rem;
  margin-bottom: 0.875rem;

  span {
    color: ${(props) => props.theme.color.text.main};
    font-size: 0.875rem;
  }
`;

const ToastIcon = styled(Icon).attrs({
  color: 'red',
  width: '1rem',
  height: '1rem',
})`
  display: ${(props) => (props.type === 'success' ? 'none' : 'block')};
  min-width: 1.25rem;
  margin-right: 0.125rem;
`;
