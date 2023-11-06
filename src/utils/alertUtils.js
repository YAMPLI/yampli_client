import React from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';
import Alert from '../components/modal/Alert';

let root = null;

export const showAlertWithoutButton = (message, duration = 2500) => {
  const alertComponent = (
    <ThemeProvider theme={theme}>
      <Alert message={message} duration={duration} />
    </ThemeProvider>
  );
  if (!root) {
    root = createRoot(document.getElementById('alert-root'));
    root.render(alertComponent);

    const unmount = setTimeout(() => {
      root.unmount();
      root = null;
      clearTimeout(unmount);
    }, duration + 100);
  }
};

export const showAlertWithButton = (message, buttonCallback) => {
  const handleUnmountButton = () => {
    root.unmount();
    root = null;
    buttonCallback && buttonCallback();
  };

  const alertComponent = (
    <ThemeProvider theme={theme}>
      <Alert message={message} buttonCallback={handleUnmountButton} />
    </ThemeProvider>
  );

  root = createRoot(document.getElementById('alert-root'));
  root.render(alertComponent);
};
