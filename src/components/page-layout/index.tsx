import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Typography,
  List,
  ListItem,
  Container,
  Divider,
  Drawer,
} from "@material-ui/core";
import clsx from "clsx";
import React from "react";
import { Menu, ChevronLeft } from "@material-ui/icons";
import AppLink from "../app-link";
import useStyles from "./useStyles";
import { routeMap, navRoutes } from "../../lib/constants/routes";
import { mappedRouteType } from "../../lib/types";

function Page({ children }: { children: any }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <Menu />
          </IconButton>
          <AppLink
            nextProps={{
              href: {
                pathname: routeMap.home.pathname,
              },
            }}
            color="primary"
            className="noWrap noUnderline"
          >
            <Typography variant="h3" component="h1" className={classes.title}>
              JS Lessons!
            </Typography>
          </AppLink>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <Typography variant="h4" component="h3">
            Lessons
          </Typography>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeft />
          </IconButton>
        </div>
        <Divider />
        <nav>
          <List>
            {navRoutes.map((route: mappedRouteType) => (
              <AppLink
                nextProps={{
                  href: {
                    pathname: route.pathname,
                    query: route.query,
                  },
                }}
                color="primary"
                className={classes.link}
                key={`${route.pathname}${
                  route.query ? JSON.stringify(route.query) : ""
                }${route.name}`}
              >
                <ListItem button>{route.name}</ListItem>
              </AppLink>
            ))}
          </List>
        </nav>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        <Container>
          <Box pt={6} pb={6}>
            {children}
          </Box>
        </Container>
      </main>
    </div>

    // <div>
    //   <AppBar position="static" color="transparent" elevation={1}>
    //     <Toolbar>
    //       <Box display="flex" flex={1} justifyContent="space-between">
    //         <Box display="flex" alignItems="center">
    //           <AppLink nextProps={{ href: "/" }}>
    //             <Typography
    //               variant="h3"
    //               component="h1"
    //               className={classes.title}
    //             >
    //               JS Lessons
    //             </Typography>
    //           </AppLink>
    //         </Box>
    //         <List className={classes.list}>
    //           <ListItem>
    //             <AppLink
    //               nextProps={{ href: "/closures" }}
    //               color="primary"
    //               className={classes.link}
    //             >
    //               Closures
    //             </AppLink>
    //           </ListItem>
    //           <ListItem>
    //             <AppLink
    //               nextProps={{ href: "/ismounted" }}
    //               color="primary"
    //               className={classes.link}
    //             >
    //               Is Mounted
    //             </AppLink>
    //           </ListItem>
    //           <ListItem>
    //             <AppLink
    //               nextProps={{
    //                 href: {
    //                   pathname: "/material-cascade",
    //                   query: { bad: "false" },
    //                 },
    //               }}
    //               color="primary"
    //               className={classes.link}
    //             >
    //               Material UI CSS Cascade - Good
    //             </AppLink>
    //           </ListItem>
    //           <ListItem>
    // <AppLink
    //   nextProps={{
    //     href: {
    //       pathname: "/material-cascade",
    //       query: { bad: "true" },
    //     },
    //   }}
    //   color="primary"
    //   className={classes.link}
    // >
    //               Material UI CSS Cascade - Bad
    //             </AppLink>
    //           </ListItem>
    //         </List>
    //       </Box>
    //     </Toolbar>
    //   </AppBar>

    // </div>
  );
}

export default Page;
