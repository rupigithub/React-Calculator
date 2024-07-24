import React, { useState } from 'react';
import './App.css';

function App() {

let [Num1,setNum1] = useState("");
let [Num2,setNum2] = useState("");
let [result, setResult] = useState('');
let [error, setError] = useState('');

const getNum = (e)=>{
  setError('');
  setResult('');
    if(e.target.name === 'num1'){
        setNum1(e.target.value);
    }
    else{
        setNum2(e.target.value);
    }
}

const validateInputs = () => {
    if (Num1 === '' || Num2 === '') {
      setError('Both fields are required.');
      setResult('');
      return false;
    }
    if (isNaN(Num1) || isNaN(Num2)) {
      setError('Inputs must be valid numbers.');
      setResult('');
      return false;
    }
    setError('');
    setError('');
    return true;
  }


const getValue = (operation)=>{
    if(!validateInputs()) return;
    // operation.preventDefault();
    let n1 = parseFloat(Num1);
    let n2 = parseFloat(Num2);
    let ans;

    switch (operation) {
        case 'add':
          ans = n1 + n2;
          break;
        case 'subtract':
          ans = n1 - n2;
          break;
        case 'multiply':
          ans = n1 * n2;
          break;
        case 'divide':
          ans = n1 / n2;
          break;
        default:
          return;
      }
      setResult(`Result : ${ans}`);
  
}

    return (
        <div className='box'>
          <div className='calculator-space'>
            <h1>React calculator</h1>
            <form action="">
              <div className='input'>
              <input type="text" name='num1'  placeholder='Num1' onChange={getNum}/>
              <input type="text" name='num2'  placeholder='Num2' onChange={getNum}/>
              </div>
              <div className='buttons'>
              <button type='button'onClick={() => getValue('add')}>+</button>
              <button type='button'onClick={() => getValue('subtract')}>-</button>
              <button type='button'onClick={() => getValue('multiply')}>x</button>
              <button type='button'onClick={() => getValue('divide')}>/</button>
              </div>
            </form>
            {error && <div><h3 className="error">Error</h3><p>{error}</p></div>}
            {result && <div><h3 className='result'>Success!</h3><p>{result}</p></div>}
        </div>
        </div>
      )
}

export default App;