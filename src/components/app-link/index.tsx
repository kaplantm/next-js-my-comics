import React from 'react';
import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import { Link as MatLink } from '@mui/material';
import { LinkProps as MatLinkProps } from '@mui/material/Link';

export type AppLinkProps = {
  children: any;
  /* Will force link to be opened in new tab, can be passed or will be inferred if link is not relative */
  isExternal?: boolean;
  nextProps?: NextLinkProps;
} & MatLinkProps;

function AppLink({
  children,
  isExternal,
  nextProps,
  ...matProps
}: AppLinkProps) {
  const fullIsExternal =
    isExternal ||
    (typeof nextProps.href === 'string' && nextProps.href.startsWith('http')) ||
    (typeof nextProps.href === 'object' &&
      nextProps.href.pathname.startsWith('http'));

  const combinedMatLinkProps = fullIsExternal
    ? { target: '_blank', ...matProps }
    : matProps;

  if (fullIsExternal) {
    const href = nextProps.href as string;
    return (
      <MatLink
        {...combinedMatLinkProps}
        href={
          typeof nextProps.href === 'object' ? nextProps.href.pathname : href
        }
        underline="hover">
        {children}
      </MatLink>
    );
  }

  return (
    <NextLink {...nextProps} passHref>
      <MatLink {...combinedMatLinkProps} underline="hover">{children}</MatLink>
    </NextLink>
  );
}

export default AppLink;
