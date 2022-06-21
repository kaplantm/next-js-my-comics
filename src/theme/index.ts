import { createTheme } from '@mui/material';
import { adaptV4Theme } from '@mui/material/styles';
import {
  white,
  cherryRed,
  slateGrey,
  black,
  medBlue,
  iceBlue,
  yellow,
} from './colors';

// Create a theme instance.
const theme = createTheme(
  adaptV4Theme({
    spacing: (factor: number) => `${0.5 * factor}rem`,
    palette: {
      primary: {
        main: black,
      },
      secondary: {
        main: yellow,
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
      fontFamily: ['Din', 'Roboto', '"Helvetica Neue"', 'sans-serif'].join(','),
    },
    overrides: {
      MuiTypography: {
        root: {
          '&.uppercase': {
            textTransform: 'uppercase',
          },
          '&.capitalize': {
            textTransform: 'capitalize',
          },
          '&.italic': {
            fontStyle: 'italic',
          },
          '&.light': {
            fontWeight: 300,
          },
          '&.normal': {
            fontWeight: 400,
          },
          '&.demiBold': {
            fontWeight: 600,
          },
          '&.bold': {
            fontWeight: 700,
          },
          '&.extraBold': {
            fontWeight: 800,
          },
          '&.remPt75': {
            fontSize: '.75rem', // 12px text equivalent based on default base font size
          },
          '&.mtHalfEm': {
            marginTop: '.5em',
          },
          '&.mbQuarterRm': {
            marginBottom: '.25em',
          },
        },
        h1: {
          fontSize: '2rem',
          fontWeight: 'normal',
        },
        h2: {
          fontSize: '1.5rem',
          fontWeight: 'normal',
        },
        h3: {
          fontSize: '1.25rem',
          fontWeight: 'normal',
        },
        h4: {
          fontSize: '1.125rem',
          fontWeight: 'normal',
        },
        h5: {
          fontSize: '1rem',
          fontWeight: 'normal',
        },
        h6: {
          fontSize: '.75rem',
          fontWeight: 'normal',
        },
        body1: {
          fontSize: '1rem', // 16px
          fontWeight: 'normal',
        },
        body2: {
          fontSize: '.875rem',
          fontWeight: 'normal',
        },
        caption: {
          fontSize: '.75rem',
          fontWeight: 'normal',
        },
        subtitle2: {
          color: slateGrey,
          fontWeight: 'normal',
        },
      },
      MuiButton: {
        root: {
          backgroundColor: iceBlue,
          whiteSpace: 'nowrap',
        },
      },
      MuiLink: {
        root: {
          color: medBlue,
          '&.noUnderline': {
            '&:hover': {
              textDecoration: 'none',
            },
          },
          '&.noWrap': {
            whiteSpace: 'nowrap',
          },
        },
      },
    },
  } as any)
);

export default theme;
