import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useExtractParams from '../../hooks/useExtractParams';
import { api } from '../../api/axios';
import QUERY from '../../constants/query';
import LoadingSpinner from '../../components/common/LoadingSpinner';
import { showAlertWithoutButton } from '../../utils/alertUtils';
import STRINGS from '../../constants/strings';
const EmailAuthPage = () => {
  const navigate = useNavigate();
  const params = useExtractParams();
  useEffect(() => {
    const data = {
      token: params.token,
    };

    api
      .post(QUERY.END_POINT.AUTH.AUTH_EMAIL, data, {
        message: {
          title: STRINGS.AUTH.AUTH_EMAIL.AUTH_SUCCESS_TITLE,
          subTitle: STRINGS.AUTH.AUTH_EMAIL.AUTH_SUCCESS_SUBTITLE,
        },
        onSuccess: () => navigate('/login'),
      })
      .catch((err) => {
        let title;
        let subTitle;
        let errMessage =
          err.response?.data?.errMessage || '인증에 실패했습니다.';
        if (errMessage.includes('|')) {
          const parts = errMessage.split('|');
          title = parts[0];
          subTitle = parts[1];
        }
        showAlertWithoutButton({ title, subTitle });
        setTimeout(() => navigate('/login'), 2500); // 2.5초 후에 navigate 실행
      });
  }, []);
  return <LoadingSpinner />;
};

export default EmailAuthPage;
