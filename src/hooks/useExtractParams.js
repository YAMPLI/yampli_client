import { useLocation } from 'react-router-dom';

const useExtractParams = () => {
  // usLocation 훅을 사용하여 쿼리스트링이 포함되어 있는 search를 가져온다.
  const { search } = useLocation();
  // 파라미터로 쿼리 스트링을 전달하여 URLSearchParams객체 생성
  const queryParams = new URLSearchParams(search);
  const query = {};

  // URLSearchParams 객체는 쿼리스트링으로 전달된 데이터를
  // 엠퍼샌드 기준으로 key=value 값 형태로 저장된 객체이다.
  // query 객체에 key-value를 저장하여 반환
  for (const [key, value] of queryParams) {
    query[key] = value;
  }
  return query;
};

export default useExtractParams;
