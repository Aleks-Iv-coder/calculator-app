import React, {FC} from 'react';
import {makeStyles, Typography, Theme} from '@material-ui/core';

interface DisplayProps {
    value: string,
};

const screenStyles = makeStyles<Theme> (({spacing}) => ({
    root: {
        minHeight: '100px',
        display: 'flex',
        justifyContent: 'flex-end',
        padding: '0 10px',
        alignItems: 'center',
        color: '#ffffff',
        overflow: 'hidden',
    },
  }));

export const Screen: FC<DisplayProps> = ({value}) => {
    const classes = screenStyles();
    return (
        <div className={classes.root}>
            <Typography variant="h2">
                {value}
            </Typography>
        </div>
    )
};