import { useState, useEffect } from 'react';

// 문자열 두 데이터의 일치 여부를 확인하는 커스텀 훅
export const useCompareString = (words, compareWords) => {
  const [isMatch, setIsMatch] = useState(false);

  useEffect(() => {
    setIsMatch(words === compareWords && compareWords !== '');
  }, [words, compareWords]);

  return isMatch;
};
