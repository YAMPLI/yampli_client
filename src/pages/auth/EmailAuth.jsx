import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const EmailAuthPage = () => {
  const navigate = useNavigate();

  const params = useParams();
  const token = params.token;

  console.log(params);
};

export default EmailAuthPage;
