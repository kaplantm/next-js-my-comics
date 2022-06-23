import ErrorComponent from '@components/errors';
import { isDevMode } from '@lib/utils';

const DebugOnlyWrapper = ({ children }) => {
  if (!isDevMode) {
    return (
      <ErrorComponent statusCode={404} setTitle errorSource="Debug Only Page" />
    );
  }
  return children;
};

export default DebugOnlyWrapper;
