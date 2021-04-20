import React from 'react';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import { useStyles } from '../styles/searchStyle';

const SearchIcu = () => {
  const classes = useStyles();

  return (
    <Paper component="form" className={classes.root}>
      <IconButton
        type="submit"
        className={classes.iconButton}
        aria-label="search"
      >
        <SearchIcon />
      </IconButton>
      <InputBase
        className={classes.input}
        placeholder="Search ICU around you"
        inputProps={{ 'aria-label': 'search google maps' }}
      />
    </Paper>
  );
};
export default SearchIcu;
