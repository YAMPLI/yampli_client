import { useState, useCallback, useEffect } from 'react';

const useRegexInput = (validationMessage, successMessage, regexPattern) => {
  const [input, setInput] = useState('');
  const [message, setMessage] = useState('');
  const [isValid, setIsValid] = useState('');

  const handleInputChange = useCallback(
    (e) => {
      const { value } = e.target;
      setInput(value);

      if (!regexPattern.test(value)) {
        console.log(regexPattern.test(value));
        setMessage(value === '' ? '' : validationMessage);
        setIsValid(false);
      } else {
        setMessage(successMessage);
        setIsValid(true);
      }
    },
    [regexPattern, validationMessage, successMessage],
  );
  return { input, handleInputChange, message, isValid };
};

export default useRegexInput;

export const usePasswordMatch = (password, confirmPassword) => {
  const [isMatch, setIsMatch] = useState(false);

  useEffect(() => {
    setIsMatch(password === confirmPassword && confirmPassword !== '');
  }, [password, confirmPassword]);

  return isMatch;
};
