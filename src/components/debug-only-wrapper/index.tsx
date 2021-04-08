import ErrorComponent from "@components/errors";

const DebugOnlyWrapper = ({ children }) => {
  if (process.env.NODE_ENV !== "development") {
    return (
      <ErrorComponent statusCode={404} setTitle errorSource="Debug Only Page" />
    );
  }
  return children;
};

export default DebugOnlyWrapper;
