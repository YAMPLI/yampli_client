import styled from 'styled-components';

const ModalContainer = ({ children }) => {
  return (
    <>
      <Wrapper>
        <Overlay></Overlay>
        {children}
      </Wrapper>
    </>
  );
};
export default ModalContainer;

const Wrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.4);
`;
