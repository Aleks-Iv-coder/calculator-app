import React from 'react';
import {makeStyles, Theme} from '@material-ui/core';
import Calculator from './components/Calculator/calculator';

const appStyles = makeStyles<Theme> (({spacing}) => ({
  root: {
    textAlign: 'center',
    backgroundColor: '#aec5f3',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 'calc(10px + 2vmin)',
    color: '#383737',
  },
}));

export const App = () => {
  const classes = appStyles();
  return (
    <div className={classes.root}>
      <p>
        App-calculator
      </p>
      <Calculator/>
    </div>
  );
}

export default App;