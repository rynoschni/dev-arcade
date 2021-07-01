import './App.css';

import {
  Switch,
  Route,
  Link
} from 'react-router-dom';


/**
 * Games will be loaded into the Arcade here
 * 
 * 1. Import your Game component from the appropriate `games` directory
 * 2. Create a <Link> to your Game in the Nav
 * 3. Create a corresponding <Route> which includes your Game Component from Step 1
 */

import CounterGame from './games/counter/CounterGame';
import MinesweeperGame from './games/Minesweeper/MinesweeperGame';
import Ping from './components/Ping';
import Rps from './games/rps/Rps'
import Tetris from "./games/tetris/tetris";
import MemoryGame from './games/memory/MemoryGame';
import MyChessBoard from './games/chess/components/MyChessBoard.js';

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/counter">Counter Game</Link>
        <br/>
        <Link to="/Minesweeper">MineSweeper Game</Link>
        <br/>
        <Link to="/rps">Rock Paper Scissors</Link>
        <br/>
        <Link to="/tetris">Tetris Game</Link>
        <br/>
        <Link to="/memory">Memory Game</Link>
        <br/>
        <Link to="/chess">Chess</Link>
        <br/>
        <Link to="/ping">Ping</Link>
      </nav>
        <Switch>
          <Route path="/counter">
            <CounterGame />
          </Route>
          <Route path="/Minesweeper">
            <MinesweeperGame/>
          </Route>
          <Route path="/rps">
            <Rps />
          </Route>
          <Route path="/tetris">
            <Tetris /> 
          </Route>
          <Route path="/memory">
            <MemoryGame /> 
          </Route>
          <Route path="/chess">
            <MyChessBoard/>
          </Route>
          <Route path="/ping">
            <Ping />
          </Route>
        </Switch>
    </div>
  );
}

export default App;
