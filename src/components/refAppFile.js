import { useEffect, useRef } from 'react';
import './App.css';
import Input from './components/Input';

const style = {
  width: '400px',
  height: '30px',
  fontSize: '20px',
  marginBottom: '10px',
};

function App() {
  const firstRef = useRef(null);
  const lastRef = useRef(null);
  useEffect(() => firstRef.current.focus(), []);
  const firstChange = (e) => {
    if (e.keyCode === 13) {
      lastRef.current.focus();
    }
  };
  return (
    <div className='App'>
      <header className='App-header'>
        <Input
          ref={firstRef}
          label='First Name'
          style={style}
          onKeyDown={firstChange}
        />
        <Input ref={lastRef} label='Last Name' style={style} />
      </header>
    </div>
  );
}

export default App;
