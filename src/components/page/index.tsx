import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Typography,
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
          <AppLink nextProps={{ href: "/" }}>
            <Box display="flex" alignItems="center">
              <IconButton edge="start" color="inherit" aria-label="menu">
                <img src="/images/pelatonia-black.svg" alt="Pelotonia" />
              </IconButton>
              <Typography variant="h3" component="h1" className={classes.title}>
                Lessons
              </Typography>
            </Box>
            {/* TODO: add links to pages */}
          </AppLink>
        </Toolbar>
      </AppBar>
      {children}
    </div>
  );
}

export default Page;
