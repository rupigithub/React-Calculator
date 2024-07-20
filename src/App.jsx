import React, { useState } from 'react';
import './App.css';

function App() {

let [Num1,setNum1] = useState("");
let [Num2,setNum2] = useState("");
let [result, setResult] = useState('');
let [error, setError] = useState('');

const getNum = (e)=>{
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
      return false;
    }
    if (isNaN(Num1) || isNaN(Num2)) {
      setError('Inputs must be valid numbers.');
      return false;
    }
    setError('');
    return true;
  }


const getValue = (operation)=>{
    if(!validateInputs()) return;
    // operation.preventDefault();
    let n1 = parseInt(Num1);
    let n2 = parseInt(Num2);
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
      setResult(`Result - ${ans}`);
  
}

    return (
        <div className='box'>
            <div className='calculator-space'>
            <h1>React calculator</h1>
            <form action="">
                <input type="text" name='num1'  placeholder='Num1' onChange={getNum}/>
                <br /><br />
                <input type="text" name='num2'  placeholder='Num2' onChange={getNum}/>
                <br /><br />
                <button type='button'onClick={() => getValue('add')}>+</button>
                <button type='button'onClick={() => getValue('subtract')}>-</button>
                <button type='button'onClick={() => getValue('multiply')}>x</button>
                <button type='button'onClick={() => getValue('divide')}>/</button>
            </form>
            {error && <div className="error">{error}</div>}
              {result && <div className="result">{result}</div>}
            </div>
         </div>
    )
}

export default App;