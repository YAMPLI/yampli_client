import { useState, useCallback } from 'react';

// 입력값 정규식 검증 및 상태 관리를 위한 커스텀 훅
const useRegexInput = (
  validationMessage,
  successMessage,
  regexPattern,
  compareValue = null, // 비교 값 (ex> 2차 비밀번호 검증)
) => {
  const [input, setInput] = useState('');
  const [message, setMessage] = useState('');
  const [isValid, setIsValid] = useState(false);

  // 입력 값 변경 핸들러
  const handleInputChange = useCallback(
    (e) => {
      const { value } = e.target;
      setInput(value);

      if (!regexPattern.test(value)) {
        setMessage(value === '' ? '' : validationMessage);
        setIsValid(false);
      } else {
        setMessage(successMessage);
        setIsValid(true);
      }
    },
    [regexPattern, validationMessage, successMessage],
  );

  // 기존 값과 비교 값 검증 핸들러
  const handleCompareChange = useCallback(
    (e) => {
      const { value } = e.target;
      setInput(value);

      if (value === compareValue && value !== '') {
        setMessage(successMessage);
        setIsValid(true);
      } else if (value === '' && compareValue === '') {
        setMessage('');
        setIsValid(false);
      } else {
        setMessage(validationMessage);
        setIsValid(false);
      }
    },
    [validationMessage, successMessage, compareValue],
  );
  // 입력값 초기화 핸들러
  const resetInput = useCallback(() => {
    setInput(''); // 입력값을 빈 문자열로 설정
    setMessage(''); // 메시지를 초기화
    setIsValid(false); // 유효성 상태를 초기화
  }, []);
  // 포커스 이벤트 핸들러
  const handleFocus = useCallback(() => {
    resetInput();
  }, [resetInput]);

  return {
    input,
    handleInputChange,
    handleCompareChange,
    handleFocus,
    message,
    isValid,
    resetInput,
  };
};

export default useRegexInput;
