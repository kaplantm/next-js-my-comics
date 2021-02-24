import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Typography,
  List,
  ListItem,
  Container,
} from "@material-ui/core";
import React from "react";
import AppLink from "../app-link";
import useStyles from "./useStyles";

function Page({ children }: { children: any }) {
  const classes = useStyles();
  return (
    <div>
      <AppBar position="static" color="transparent" elevation={1}>
        <Toolbar>
          <Box display="flex" flex={1} justifyContent="space-between">
            <Box display="flex" alignItems="center">
              <AppLink nextProps={{ href: "/" }}>
                <IconButton edge="start" color="inherit" aria-label="menu">
                  <img src="/images/pelatonia-black.svg" alt="Pelotonia" />
                </IconButton>
              </AppLink>
              <Typography variant="h3" component="h1" className={classes.title}>
                Lessons
              </Typography>
            </Box>
            <List className={classes.list}>
              <ListItem>
                <AppLink
                  nextProps={{ href: "/closures" }}
                  color="primary"
                  className={classes.link}
                >
                  Closures
                </AppLink>
              </ListItem>
              <ListItem>
                <AppLink
                  nextProps={{ href: "/ismounted" }}
                  color="primary"
                  className={classes.link}
                >
                  Is Mounted
                </AppLink>
              </ListItem>
              <ListItem>
                <AppLink
                  nextProps={{
                    href: {
                      pathname: "/material-cascade",
                      query: { bad: "false" },
                    },
                  }}
                  color="primary"
                  className={classes.link}
                >
                  Material UI CSS Cascade - Good
                </AppLink>
              </ListItem>
              <ListItem>
                <AppLink
                  nextProps={{
                    href: {
                      pathname: "/material-cascade",
                      query: { bad: "true" },
                    },
                  }}
                  color="primary"
                  className={classes.link}
                >
                  Material UI CSS Cascade - Bad
                </AppLink>
              </ListItem>
            </List>
          </Box>
        </Toolbar>
      </AppBar>
      <Container>
        <Box pt={6} pb={6}>
          {children}
        </Box>
      </Container>
    </div>
  );
}

export default Page;
