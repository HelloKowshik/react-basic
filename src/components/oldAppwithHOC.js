import './App.css';
import NameTag from './components/NameTag';

const makeGreen = (Component) => (porps) => {
  const addGreen = {
    style: {
      color: 'green',
    },
  };
  const newProps = { ...porps, ...addGreen };
  return <Component {...newProps} />;
};

const GreenTag = makeGreen(NameTag);
function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='name title'>Names List</h1>
        <NameTag first='Peter' second='Johnson' />
        <NameTag first='Peter' second='Johnson' />
        <GreenTag first='Joe' second='Root' />
      </header>
    </div>
  );
}

export default App;
