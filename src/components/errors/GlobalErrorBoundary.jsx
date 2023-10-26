import * as React from 'react';
import NetworkError from './NetworkError';
class GlobalErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shouldHandleError: false,
      error: null,
      errorCode: null,
    };
  }

  static getDerivedStateFromError(error) {
    /** ApiError에서 처리할 에러코드 */

    const errorCode = error.response && error.response.status;

    return {
      shouldHandleError: true,
      serializedPagewebError: '로그인이 필요합니다.',
      errorCode,
    };
  }

  render() {
    if (!this.state.shouldHandleError) {
      return this.props.children;
    }

    if (this.state.errorCode === 404) {
      return (
        <NetworkError
          onClickRetry={() => {
            if (this.props.onRetry) this.props.onRetry();
            this.setState({ shouldHandleError: false });
          }}
        ></NetworkError>
      );
    }
  }
}
export default GlobalErrorBoundary;
