import React, {FC} from 'react';
import classNames from 'classnames';
import {Button as MuiButton, makeStyles,} from '@material-ui/core';
import {ButtonsColors} from '../../common/types';

export interface ButtonProps {
    color: ButtonsColors;
    label: string;
    onClick: () => void;
    name?: string;
}

const useButtonStyles = makeStyles({
  button: {
      width: '50px',
      height: '60px',
      padding: '0',
      color: '#ffffff',
      fontFamily: 'inherit',
      fontSize: 'inherit',
      textTransform: 'none',
      border: 'none',
      borderRadius: '50%',
  },
  btnOrange: {
    backgroundColor: '#e6a328',
    '&:hover': {
      backgroundColor: '#ffffff',
      color: '#e6a328',
    },
  },
  btnLightGray: {
    backgroundColor: '#9c9c9c',
    '&:hover': {
      backgroundColor: '#ffffff',
      color: '#aba9a5',
    },
  },
  btnDarkGray: {
    backgroundColor: '#545352',
    '&:hover': {
      backgroundColor: '#9c9c9c',
    },
  },
  btnLarge: {
    gridColumnStart: 'span 2',
    width: 'auto',
    borderRadius: '30px',
  },
});

export const Button: FC<ButtonProps> = ({color, onClick, label, name}) => {
  const classes = useButtonStyles();
  const {button, btnOrange, btnLightGray, btnDarkGray, btnLarge} = classes;
  const buttonClassName = classNames(button, {
    [btnOrange]: color === 'orange',
    [btnLightGray]: color === 'light-gray',
    [btnDarkGray]: color === 'dark-gray',
    [btnLarge]: name === 'large',
  });

  return (
    <MuiButton className={buttonClassName}  onClick={onClick}>
      {label}
    </MuiButton>
  );
};