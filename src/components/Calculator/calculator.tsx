import React, {FC, useState} from 'react';
import {Card, makeStyles, Theme} from '@material-ui/core';
import {Screen} from '../Display/Screen';
import {KeyPad} from '../KeyPad/KeyPad';
import {Operator} from '../../common/types';
import {ButtonProps} from '../Button/Button';

const useCalculatorStyles = makeStyles<Theme> (() => ({
    root: {
        maxWidth: '340px',
        padding: '5px',
        backgroundColor: '#272626',
    }
  }));

export const Calculator: FC = () => {
    const classes = useCalculatorStyles();
    const [pendingOperator, setPendingOperator] = useState<Operator>();
    const [numValue, setNumValue] = useState<boolean>(true);
    const [result, setResult] = useState<number>(0);
    const [display, setDisplay] = useState<string>('0');
    const [memory, setMemory] = useState<number>(0);

    const calculation = (currentValue: number, pendingOperator: Operator): boolean => {
        let data = result;

        switch (pendingOperator) {
            case '+': 
                data += currentValue;
                break;
            case '-': 
                data -= currentValue;
                break;
            case '×':
                data *= currentValue;
                break;
            case '÷':
                if(currentValue === 0) {
                    return false;
                }
                data /= currentValue;
        }
        setResult(data);
        setDisplay(data.toString().toString().slice(0, 10));
        return true;
    }

        const numberClick = (num: string) => {
        let data = display;
        if ((display === '0' && num === '0') || display.length > 10) {
            return;
        }

        if (numValue) {
            data = '';
            setNumValue(false);
        }

        if (display !== '0') {
            data = data + num;
        } 
        else {
            data = num;
        }
        setDisplay(data);
    }

    const operatorClick = (operator: Operator) => {
        const data = Number(display);
        if (typeof pendingOperator !== 'undefined' && !numValue) {
            if (!calculation(data, pendingOperator)) {
                return
            }
        }
        else {
            setResult(data);
        }
        if (operator !== '%') {
            setPendingOperator(operator);
            setNumValue(true);
        }
    }

    const pointClick = () => {
        let data = display;
        if (numValue) {
            data = '0';
        }

        if (data.indexOf('.') === -1) {
            data = data + '.';
        }
        setDisplay(data);
        setNumValue(false);
    }

    const changeSignClick = () => {
        const value = Number(display);

        if (value > 0) {
            setDisplay('-' + display);
        } else if (value < 0) {
            setDisplay(display.slice(1));
            }
    }

    const percentCall = () => {
        let currentValue = Number(display);
        if(!result || numValue){
            currentValue = currentValue / 100;
        }
        else currentValue = result / 100 * currentValue;
        setDisplay(currentValue.toString());
    };

    const equalClick = () => {
        const data = Number(display);

        if (typeof pendingOperator !== 'undefined' && !numValue) {
            if (!calculation(data, pendingOperator)) {
                return;
            }
            else setPendingOperator(undefined);
        }
        else {
            setDisplay(data.toString());
        }
        
        setNumValue(true);
    };

    const allClearClick = () => {
        setResult(0);
        setPendingOperator(undefined);
        setDisplay('0');
        setNumValue(true);
    };

    const memoryClear = () => {
        setMemory(0);
        setNumValue(true);
    }

    const memoryRecall = () => {
        setDisplay(memory.toString());
        setNumValue(false);
    }

    const memoryAdd = () => {
        setMemory(memory + Number(display));
        setNumValue(true);

    }

    const memorySubtract  = () => {
        setMemory(memory - Number(display));
        setNumValue(true);
    }

    const buttonsConfig: ButtonProps[] = [
        {
            color: 'light-gray',
            label: 'AC',
            onClick: allClearClick,
        },
        {
            color: 'light-gray',
            label: '-/+',
            onClick: changeSignClick,
        },
        {
            color: 'light-gray',
            label: '%',
            onClick:  percentCall,
        },
        {
            color: 'orange',
            label: '÷',
            onClick: () => operatorClick('÷'),
        },
        {
            color: 'dark-gray',
            label: 'mc',
            onClick: memoryClear,
        },
        {
            color: 'dark-gray',
            label: 'mr',
            onClick: memoryRecall,
        },
        {
            color: 'dark-gray',
            label: 'm-',
            onClick: memorySubtract,
        },
        {
            color: 'orange',
            label: 'm+',
            onClick: memoryAdd,
        },
        {
            color: 'dark-gray',
            label: '7',
            onClick: () => numberClick('7'),
        },
        {
            color: 'dark-gray',
            label: '8',
            onClick: () => numberClick('8'),
        },
        {
            color: 'dark-gray',
            label: '9',
            onClick: () => numberClick('9'),
        },
        {
            color: 'orange',
            label: '×',
            onClick: () => operatorClick('×'),
        },
        {
            color: 'dark-gray',
            label: '4',
            onClick: () => numberClick('4'),
        },
        {
            color: 'dark-gray',
            label: '5',
            onClick: () => numberClick('5'),
        },
        {
            color: 'dark-gray',
            label: '6',
            onClick: () => numberClick('6'),
        },
        {
            color: 'orange',
            label: '-',
            onClick: () => operatorClick('-'),
        },
        {
            color: 'dark-gray',
            label: '1',
            onClick: () => numberClick('1'),
        },
        {
            color: 'dark-gray',
            label: '2',
            onClick: () => numberClick('2'),
        },
        {
            color: 'dark-gray',
            label: '3',
            onClick: () => numberClick('3'),
        },
        {
            color: 'orange',
            label: '+',
            onClick: () => operatorClick('+'),
        },
        {
            color: 'dark-gray',
            label: '0',
            onClick: () => numberClick('0'),
            name: 'large',
        },
        {
            color: 'dark-gray',
            label: '.',
            onClick: pointClick,
        },
        {
            color: 'orange',
            label: '=',
            onClick: equalClick,
        },
    ];

    return (
      <Card className={classes.root}>
          <Screen value={display}/>
          <KeyPad
            buttonsConfig={buttonsConfig}
          />
      </Card>
    );
  }
  
  export default Calculator;