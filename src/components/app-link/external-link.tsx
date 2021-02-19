import React from 'react';
import { Typography, Box, SvgIconProps } from '@material-ui/core';
import { Variant } from '@material-ui/core/styles/createTypography';
import { makeStyles } from '@material-ui/core/styles';
import { SvgIconComponent } from '@material-ui/icons';
import OpenInNew from '@material-ui/icons/OpenInNew';
import clsx from 'clsx';
import AppLink from '@components/links/app-link';

const useStyles = makeStyles(() => ({
  text: {
    verticalAlign: 'top',
    marginRight: '.5em',
  },
  icon: {
    verticalAlign: 'middle',
  },
}));

function ExternalLink({
  children,
  href,
  textVariant = 'h6',
  iconVariant = 'h5',
  IconComponent = OpenInNew,
  iconProps = { fontSize: 'small' },
}: {
  children: any;
  href: string;
  textVariant?: Variant;
  iconVariant?: Variant;
  IconComponent?: SvgIconComponent;
  iconProps?: SvgIconProps;
}) {
  const classes = useStyles();
  return (
    <AppLink
      nextProps={{
        href,
      }}
      isExternal
    >
      <Box
        display="inline-flex"
        alignItems="center"
        className="externalLinkContainer"
      >
        <Typography
          component="span"
          variant={textVariant}
          className={clsx(classes.text, 'fontOffset', 'externalLinkText')}
        >
          {children}
        </Typography>
        <Typography
          component="span"
          variant={iconVariant}
          className="externalLinkIcon"
        >
          <IconComponent className={classes.icon} {...iconProps} />
        </Typography>
      </Box>
    </AppLink>
  );
}

export default ExternalLink;
