import React, {FC, useState} from 'react';
import {Screen} from './components/Display/Display';
import {KeyPad} from './components/KeyPad/KeyPad';

import './App.css';

export const App: FC = () => {
  // const [result, setResult] = useState<number>(0)
  const [display, setDisplay] = useState<string>('0')
  return (
    <div className="app">
        <p>
          My calculator
        </p>
        <Screen value={display}/>
        <KeyPad/>
    </div>
  );
}

export default App;
