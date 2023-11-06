import { v4 as uuidv4 } from 'uuid';
import { addToast as add, removeToast } from '../store/toastSlice';
import { useDispatch } from 'react-redux';
import { useRef } from 'react';
import { useCallback } from 'react';

const useToast = () => {
  const dispatch = useDispatch();
  /**
   * setTimeout은 토스트 추가시 비동기적 동작을 수행한다.
   * 토스트가 최대 3개 제한으로 인해 제거되었는데
   * 3초 후에 제거하도록 설정된 타임아웃이 있다면,
   * 토스트가 더 이상 존재하지 않을 때 문제가 발생할 수 있다.
   * 토스트 타임아웃 추적위한 ref를 추가하여 타임아웃을 추적하고 불필요한 경우 삭제하도록 수정
   */

  // 수정 전
  //   const deleteToast = (id) => {
  //     dispatch(removeToast(id));
  //   };

  //   const addToast = (toast) => {
  //     const id = uuidv4();
  //     const toastWithId = {
  //       ...toast,
  //       id,
  //     };

  //     dispatch(add(toastWithId));

  //     setTimeout(() => {
  //       deleteToast(id);
  //     }, 3000);
  //   };

  const toastTimeouts = useRef({});

  const deleteToast = useCallback(
    (id) => {
      if (toastTimeouts.current[id]) {
        clearTimeout(toastTimeouts.current[id]);
        delete toastTimeouts.current[id];
      }
      dispatch(removeToast(id));
    },
    [dispatch],
  );
  const addToast = useCallback(
    (toast) => {
      const id = uuidv4();
      const toastWithId = { ...toast, id };

      dispatch(add(toastWithId));

      toastTimeouts.current[id] = setTimeout(() => {
        deleteToast(id);
      }, 33000);
    },
    [dispatch, deleteToast],
  );

  const successToast = (text) => {
    addToast({
      text,
      type: 'success',
    });
  };

  const errorToast = (text) => {
    addToast({
      text,
      type: 'error',
    });
  };

  return {
    addToast,
    deleteToast,
    successToast,
    errorToast,
  };
};

export default useToast;
