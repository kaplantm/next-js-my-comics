import React from "react";
import NextLink, { LinkProps as NextLinkProps } from "next/link";
import MatLink, { LinkProps as MatLinkProps } from "@material-ui/core/Link";

export type AppLinkProps = {
  children: any;
  isExternal?: boolean;
  nextProps?: NextLinkProps;
} & MatLinkProps;

function AppLink({
  children,
  isExternal,
  nextProps,
  ...matProps
}: AppLinkProps) {
  const combinedMatLinkProps = isExternal
    ? { target: "_blank", ...matProps }
    : matProps;

  if (isExternal) {
    const href = nextProps.href as string;
    return <MatLink {...combinedMatLinkProps}>{children}</MatLink>;
  }

  return (
    <NextLink {...nextProps} passHref>
      <MatLink {...combinedMatLinkProps}>{children}</MatLink>
    </NextLink>
  );
}

export default AppLink;
