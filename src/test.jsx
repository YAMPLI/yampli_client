import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Input from './components/common/Input';
import styled from 'styled-components';

const test = () => {
  const [phone, setPhone] = useState('');
  const handleValue = (e) => {
    setPhone(e.target.value);
  };
  return (
    <StyledInput
      type="text"
      value={phone}
      onChange={handleValue}
      maxLength={10}
      placeholder="testtest"
      marginTop="55px"
    ></StyledInput>
  );
};

export default test;

const StyledInput = styled(Input).attrs({
  color: 'white',
  borderR: 0,
  padding: '30px',
})`
  margin-top: 55px;
`;
