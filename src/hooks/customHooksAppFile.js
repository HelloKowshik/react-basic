import { useState } from 'react';
import './App.css';
import List from './components/List';
import useList from './hooks/useList';

const init = [
  { name: 'Tomatto', calorie: 45 },
  { name: 'Carrot', calorie: 15 },
  { name: 'Brinjal', calorie: 30 },
  { name: 'Potato', calorie: 52 },
  { name: 'Rice', calorie: 65 },
];

function App() {
  // const [list, setList] = useState(init);
  const [editable, setEditable] = useState(false);
  const { list, save, remove } = useList(init);
  const removeItem = (e) => {
    // const filteredList = list.filter((i) => i.name !== e.target.name);
    // setList(filteredList);
    remove(e.target.name);
  };
  const toggleItem = () => setEditable(true);

  const changeItem = (e, ind) => {
    if (e.key === 'Enter') {
      setEditable(!editable);
      // const copiedItems = [...list];
      // copiedItems[ind].name = e.target.value;
      save(ind, e.target.value);
    }
  };
  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='name title'>Grocery List</h1>
        {list.map((item, ind) => (
          <List
            key={item.calorie}
            {...item}
            removeItem={removeItem}
            editable={editable}
            toggleItem={toggleItem}
            changeItem={changeItem}
            index={ind}
          />
        ))}
      </header>
    </div>
  );
}

export default App;
