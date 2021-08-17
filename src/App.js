import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TicTacToe from './tic-tac-toe/TicTacToe';
import Menu from './components/Menu';
import DragDrop from './drag-n-drop/DragDrop';

function App() {
  return (
    <Router>
      <div className='App'>
        <Menu />
        <Switch>
          <Route path='/gameOne'>
            <TicTacToe />
          </Route>
          <Route path='/gameTwo'>
            <DragDrop />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
