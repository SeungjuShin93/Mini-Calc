import { useState } from 'react';

function App() {
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [operation, setOperation] = useState('');
  const [result, setResult] = useState(null);
  const onChange = (event) => {
    setNumber1(Number(event.target.value));
  };
  const onChange2 = (event) => {
    setNumber2(Number(event.target.value));
  };
  const onSelect = (event) => {
    setOperation(event.target.value);
  };
  const onCalc = () => {
    switch (operation) {
      case '+':
        setResult(String(number1 + number2));
        break;
      case '-':
        setResult(String(number1 - number2));
        break;
      case '*':
        setResult(String(number1 * number2));
        break;
      case '/':
        setResult(String(number1 / number2));
        break;
      default:
        setResult(null);
    }
  };
  return (
    <div className='container'>
      <h1>🔥 Calculator 🔥</h1>
      <input
        value={number1}
        type='number'
        onChange={onChange}
        placeholder='➡Write a number...'
      />
      <input
        value={number2}
        type='number'
        onChange={onChange2}
        placeholder='➡Write another one...'
      />
      <select value={operation} onChange={onSelect}>
        <option value='init'>➡Select operation</option>
        <option value='+'>+</option>
        <option value='-'>-</option>
        <option value='*'>*</option>
        <option value='/'>/</option>
      </select>
      <button onClick={onCalc}>Calculate</button>
      <div className='result'>
        {result ? <h1>The result is: {result} </h1> : null}
      </div>
    </div>
  );
}

export default App;
