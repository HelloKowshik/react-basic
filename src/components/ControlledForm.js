import { useState } from 'react';
import Test from './Test';

const ControlledForm = () => {
  const [name, setName] = useState('');
  const [income, setIncome] = useState('');
  const [data, setData] = useState([]);
  const handleChange = (e) => setName(e.target.value);
  const handleSelect = (e) => setIncome(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && income) {
      const newData = { name, income };
      setData([...data, newData]);
      setName('');
      setIncome('');
    }
  };
  console.log(data);
  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='name title'>Simple Form</h1>
        <form onSubmit={handleSubmit}>
          <div className='name'>
            <span>Name:</span>
            <input type='text' value={name} onChange={handleChange} />
          </div>
          <div className='name'>
            <span>Income:</span>
            <select value={income} onChange={handleSelect}>
              <option value='high'>High</option>
              <option value='mid'>Mid</option>
              <option value='low'>Low</option>
            </select>
          </div>
          <input type='submit' value='submit' className='btn' />
        </form>
        {data &&
          data.map((item, ind) => (
            <Test key={ind} name={item.name} income={item.income} />
          ))}
      </header>
    </div>
  );
};

export default ControlledForm;
