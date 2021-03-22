import React, {FC} from 'react';
import {makeStyles, Theme} from '@material-ui/core';
import {Button, ButtonProps} from '../Button/Button';

const useKeyPadStyles = makeStyles<Theme> (({spacing}) => ({
    root: {
        '& > *': {
            margin: spacing(1),
        },
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gridAutoRows: '1fr',
        padding: '5px',
        backgroundColor: '#272626',
    },
}));

interface KeyPadProps {
    buttonsConfig: ButtonProps[];
}

export const KeyPad: FC<KeyPadProps> = ({buttonsConfig}) => {
    const classes = useKeyPadStyles();
    const buttons = buttonsConfig.map((item: ButtonProps, index: number) => {
        return (
            <Button key={index} color={item.color} onClick={item.onClick} label={item.label} name={item.name}/>
        );
    });

    return (
        <div className={classes.root}>
            {buttons}
        </div>
    );
};