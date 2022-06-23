import { makeStyles } from 'tss-react/mui';

type styleConfigType = {
  coverWidth: number;
  coverHeight: number;
};

const useStyles = makeStyles<styleConfigType>()(theme => ({
  coverImageContainer: {
    [theme.breakpoints.down('md')]: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
    },
    '& ul': {
      paddingInlineStart: theme.spacing(2),
    },
    '& li': {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
    '& .viewableImageWrapper': {
      float: 'right',
      margin: theme.spacing(2, 0, 2, 2),
      '& img': {
        width: ({ coverWidth }: styleConfigType) => coverWidth,
        height: ({ coverHeight }: styleConfigType) => coverHeight,
      },
      [theme.breakpoints.down('md')]: {
        margin: 0,
        '& img': {
          width: ({ coverWidth }: styleConfigType) => coverWidth * 0.75,
          height: ({ coverHeight }: styleConfigType) => coverHeight * 0.75,
        },
      },
    },
  },
  childrenContainer: {
    marginTop: theme.spacing(6),
    alignSelf: 'flex-start',
    maxWidth: '60%',
    [theme.breakpoints.down('sm')]: {
      maxWidth: '100%',
    },
  },
  imagesContainer: {
    marginTop: theme.spacing(6),
  },
}));

export default useStyles;
