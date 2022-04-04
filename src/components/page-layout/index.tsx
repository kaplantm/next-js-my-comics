import {
  AppBar,
  Toolbar,
  Typography,
  List,
  ListItem,
  Container,
} from '@material-ui/core';
import clsx from 'clsx';
import React from 'react';
import AppLink from '../app-link';
import useStyles from './use-styles';
import { routeMap, navRoutes } from '../../lib/constants/routes';
import { MappedRouteType } from '../../lib/types';

function Page({ children }: { children: any }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/* <AppBar position="fixed" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <AppLink
            nextProps={{
              href: {
                pathname: routeMap.home.pathname,
              },
            }}
            color="secondary"
            className="noWrap noUnderline"
          >
            <Typography variant="h3" component="h1" className={classes.title}>
              Comics
            </Typography>
          </AppLink>
          <nav>
            <List className={classes.navList}>
              {navRoutes.map(
                (route: MappedRouteType) =>
                  (!route.dev || process.env.NODE_ENV === 'development') && (
                    <AppLink
                      nextProps={{
                        href: {
                          pathname: route.pathname,
                          query: route.query,
                        },
                      }}
                      className={classes.link}
                      key={`${route.pathname}${
                        route.query ? JSON.stringify(route.query) : ''
                      }${route.name}`}
                    >
                      <ListItem button>{route.name}</ListItem>
                    </AppLink>
                  )
              )}
            </List>
          </nav>
        </Toolbar>
      </AppBar> */}
      <main className={clsx(classes.content)}>
        <Container>{children}</Container>
      </main>
    </div>
  );
}

export default Page;
