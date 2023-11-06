import AlertModalUI from './AlertModalUI';
import { useState, useEffect } from 'react';

const Alert = ({ message, duration, buttonCallback }) => {
  const [isErrorModalOpen, setIsErrorModalOpen] = useState(true);
  useEffect(() => {
    let autoCloseTimer;
    if (duration) {
      autoCloseTimer = setTimeout(() => {
        setIsErrorModalOpen(false);
      }, duration);
    }
    return () => {
      duration && clearTimeout(autoCloseTimer);
      buttonCallback && buttonCallback();
    };
  }, [duration, buttonCallback]);

  return (
    <AlertModalUI
      isErrorModalOpen={isErrorModalOpen}
      message={message}
      duration={duration}
      buttonCallback={buttonCallback}
    />
  );
};

export default Alert;
