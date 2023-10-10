import { useCallback } from 'react';

const useTimeFormat = () => {
  /**
   * 숫자가 10 미만이면 앞에 '0'을 붙여 2자리로 만드는 함수
   * 최초 렌더링 때만 함수 생성 -> 빈 의존성 배열
   */
  const pad = useCallback((number) => ('0' + number).slice(-2), []);

  /**
   * 초를 mm:ss 혹은 hh:mm:ss 형식으로 변환하는 함수
   */
  const timeFormat = useCallback(
    (seconds) => {
      if (!seconds) {
        return '00:00';
      }

      // Date 밀리초 단위를 초단위로 변환
      const date = new Date(seconds * 1000);
      const hh = date.getUTCHours();
      const mm = date.getUTCMinutes();
      const ss = date.getUTCSeconds();

      if (hh) {
        return `${pad(hh)}:${pad(mm)}:${pad(ss)}`;
      }
      return `${pad(mm)}:${pad(ss)}`;
    },
    [pad],
  );

  return { timeFormat };
};

export default useTimeFormat;
