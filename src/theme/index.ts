import { createMuiTheme } from "@material-ui/core/styles";
import {
  white,
  cherryRed,
  slateGrey,
  black,
  medBlue,
  offWhite,
  iceBlue,
} from "./colors";

// Create a theme instance.
const theme = createMuiTheme({
  spacing: (factor: number) => `${0.5 * factor}rem`,
  palette: {
    primary: {
      main: black,
    },
    secondary: {
      main: slateGrey,
    },
    error: {
      main: cherryRed,
    },
    background: {
      default: white,
    },
    text: {
      primary: black,
    },
  },
  typography: {
    fontFamily: ["Din", "Roboto", '"Helvetica Neue"', "sans-serif"].join(","),
  },
  overrides: {
    MuiTypography: {
      root: {
        "&.uppercase": {
          textTransform: "uppercase",
        },
        "&.italic": {
          fontStyle: "italic",
        },
        "&.light": {
          fontWeight: 300,
        },
        "&.normal": {
          fontWeight: 400,
        },
        "&.demiBold": {
          fontWeight: 600,
        },
        "&.bold": {
          fontWeight: 700,
        },
        "&.extraBold": {
          fontWeight: 800,
        },
        "&.remPt75": {
          fontSize: ".75rem", // 12px text equivalent based on default base font size
        },
        "&.mtHalfEm": {
          marginTop: ".5em",
        },
        "&.mbQuarterRm": {
          marginBottom: ".25em",
        },
      },
      h1: {
        fontSize: "3.75rem", // 60px text equivalent based on default base font size
        lineHeight: 1.2,
        letterSpacing: "0.0425rem",
        fontWeight: "normal",
      },
      h2: {
        fontSize: "2.75rem", // 44px text equivalent based on default base font size
        lineHeight: 1.23,
        letterSpacing: "0.03125rem",
        fontWeight: "normal",
      },
      h3: {
        fontSize: "2.125rem", // 34px text equivalent based on default base font size
        lineHeight: 1.26,
        letterSpacing: "0.03125rem",
        fontWeight: "normal",
      },
      h4: {
        fontSize: "1.5rem", // 24px text equivalent based on default base font size
        letterSpacing: "0.015rem",
        fontWeight: "normal",
      },
      h5: {
        fontSize: "1.25rem", // 20px text equivalent based on default base font size
        lineHeight: 1.4,
        letterSpacing: "0.015rem",
        fontWeight: "normal",
        "&.contentfulRichText": {
          fontWeight: 600,
        },
      },
      h6: {
        fontSize: "1.125rem", // 18px text equivalent based on default base font size
        lineHeight: 1.4,
        letterSpacing: "0.015rem",
        fontWeight: "normal",
      },
      body1: {
        fontSize: "1rem", // 16px text equivalent based on default base font size
        letterSpacing: "0.01rem",
        lineHeight: 1.5,
        "&.contentfulRichText": {
          fontSize: "1.25rem",
        },
      },
      body2: {
        fontSize: ".875rem", // 14px text equivalent based on default base font size
        // body2 letterspacing and lineheight varies by color and alignment
        // please refer to the styleguide for non-black colors
        lineHeight: 1.43,
        letterSpacing: "0.01rem",
      },
      caption: {
        fontSize: ".75rem", // 12px text equivalent based on default base font size
      },
      subtitle2: {
        color: slateGrey,
      },
    },
    MuiButton: {
      root: { backgroundColor: iceBlue },
    },
    MuiLink: {
      root: {
        color: medBlue,
        "&.noUnderline": {
          "&:hover": {
            textDecoration: "none",
          },
        },
        "&.noWrap": {
          whiteSpace: "nowrap",
        },
      },
    },
  },
} as any);

export default theme;
