import React, { useState } from 'react';
import'./calculator.css'

function Calculator() {
  const [inputValue, setInputValue] = useState('');
  const [history, setHistory] = useState([]);
  const [theme, setTheme] = useState('light');

  const handleNumberClick = (number) => {
    if (inputValue === '0') {
      setInputValue(number);
    } else {
      setInputValue(inputValue + number);
    }
  };

  const handleOperationClick = (operation) => {
    if (inputValue!== '') {
      setInputValue(inputValue + operation);
    }
  };

  const handleEqualsClick = () => {
    if (inputValue!== '') {
      const result = eval(inputValue);
      setHistory([...history, inputValue + '=' + result]);
      setInputValue(result);
    }
  };

  const handleClearClick = () => {
    setInputValue('');
    setHistory([]);
  };

  const handleDeleteClick = () => {
    setInputValue(inputValue.slice(0, -1));
  };

  const handlePercentageClick = () => {
    if (inputValue!== '') {
      const percentage = parseFloat(inputValue) / 100;
      setInputValue(percentage.toString());
    }
  };

  return (
    <>
    <div className={`calculator ${theme}`}>
      <header>
        <h1>Calculadora</h1>
        <button onClick={() => setTheme(theme === 'light'? 'dark' : 'light')}>
          Mudar Tema
        </button>
      </header>
      <input type="text" value={inputValue} readOnly />
      <div className="button-grid">
        <button onClick={() => handleNumberClick('7')}>7</button>
        <button onClick={() => handleNumberClick('8')}>8</button>
        <button onClick={() => handleNumberClick('9')}>9</button>
        <button onClick={() => handleOperationClick('/')}>/</button>
        <button onClick={() => handleNumberClick('4')}>4</button>
        <button onClick={() => handleNumberClick('5')}>5</button>
        <button onClick={() => handleNumberClick('6')}>6</button>
        <button onClick={() => handleOperationClick('*')}>*</button>
        <button onClick={() => handleNumberClick('1')}>1</button>
        <button onClick={() => handleNumberClick('2')}>2</button>
        <button onClick={() => handleNumberClick('3')}>3</button>
        <button onClick={() => handleOperationClick('-')}>-</button>
        <button onClick={() => handleNumberClick('0')}>0</button>
        <button onClick={() => handleNumberClick('.')}>.</button>
        <button onClick={() => handleOperationClick('+')}>+</button>
        <button onClick={handleEqualsClick}>=</button>
        <button onClick={handleClearClick}>C</button>
        <button onClick={handleDeleteClick}>Del</button>
        <button onClick={handlePercentageClick}>%</button>
      </div>
      <div className="history">
        {history.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>
    </div>
    </>
  );
}

export default Calculator;