import {
  AppBar,
  Toolbar,
  List,
  ListItem,
  Container,
  Typography,
} from '@mui/material';
import { isDevMode } from '@lib/utils';
import React from 'react';
import AppLink from '../app-link';
import useStyles from './use-styles';
import { routeMap, navRoutes } from '../../lib/constants/routes';
import { MappedRouteType } from '../../lib/types';

function Page({ children }: { children: any }) {
  const { classes } = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
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
                  (!route.dev || isDevMode) && (
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
      </AppBar>
      <main className={classes.content}>
        <Container>{children}</Container>
      </main>
    </div>
  );
}

export default Page;
