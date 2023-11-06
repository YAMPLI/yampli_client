import React from 'react';
import Spinner from '../../assets/imgs/LodingSpinner.gif';
import styled from 'styled-components';
const LoadingSpinner = () => {
  return (
    <LoadingSpinnerContainer>
      <SpinnerWrap src={Spinner} />
    </LoadingSpinnerContainer>
  );
};

export default LoadingSpinner;

const LoadingSpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SpinnerWrap = styled.img.attrs({
  alt: '로딩중',
})`
  width: 10%;
  height: 10%;
`;
