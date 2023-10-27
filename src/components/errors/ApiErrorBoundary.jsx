import * as React from 'react';
import NetworkError from './NetworkError';
import { useNavigate } from 'react-router';
class ApiErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shouldHandleError: false,
      shouldRethrow: false,
      error: null,
      errorCode: null,
    };
  }

  static getDerivedStateFromError(error) {
    /** ApiError에서 처리할 에러코드 */
    const apiErrCode = [400, 404, 429, 500, 503];
    const errorCode = error.response && error.response.status;

    /** 글로벌에서 처리해야할 에러코드 */
    if (!apiErrCode.includes(errorCode)) {
      return {
        shouldHandleError: false,
        shouldRethrow: true,
        error,
        errorCode,
      };
    }
    return {
      shouldHandleError: true,
      shouldRethrow: false,
      serializedPagewebError: '로그인이 필요합니다.',
      errorCode,
    };
  }

  render() {
    if (this.state.shouldRethrow) {
      throw this.state.error;
    }
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
export default ApiErrorBoundary;
