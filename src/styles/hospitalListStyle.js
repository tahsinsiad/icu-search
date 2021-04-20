import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    zIndex: 0,
    top: '230px',
    width: '100%',
    maxWidth: '600px',
    margin: '0 auto',
    backgroundColor: theme.palette.background.paper,
  },
  listItem: {
    marginBottom: '10px',
    borderRadius: '10px',
    boxShadow: '0px 0px 3px 0px rgba(46,74,117,0.61);',
  },
  inline: {
    display: 'inline',
  },
}));
