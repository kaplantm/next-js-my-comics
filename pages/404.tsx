import React from "react";
import ErrorComponent from "@components/errors";

const NotFoundPage = (props: { statusCode: number }) => {
  const { statusCode } = props;
  return (
    <ErrorComponent
      statusCode={statusCode}
      setTitle
      errorSource="Not Found Page"
    />
  );
};

export async function getStaticProps() {
  return {
    props: { statusCode: 404 },
  };
}

export default NotFoundPage;
