import {useRef, useState} from 'react';
import { Container, Console, DropDownContainer } from './Header.styles';
import dijkstra from '../../tree-algos/Dijkstra';

const Header = ({dispatch}) => {
  const oldActiveBttn = useRef(null);
  const [dropAlgos, setDropAlgos] = useState(false);
  const [dropMaze, setDropMaze] = useState(false);
  const [dropSpeed, setDropSpeed] = useState(false);
  const [startBttnTxt, setStartBttnTxt] = useState('Pick an Algorithm!');
  const [speedBttnTxt, setSpeedBttnTxt] = useState('Speed: Fast');

  const handleDropDown = () => {
    const newActiveBttn = document.activeElement;
    if (newActiveBttn === oldActiveBttn.current) {
      newActiveBttn.blur();
      oldActiveBttn.current = null;
      return;
    }
    if (newActiveBttn.textContent === 'Algorithms') {
      setDropAlgos(true);
      setDropMaze(false);
      setDropSpeed(false);
    } else if (newActiveBttn.textContent === 'Maze & Patterns') {
      setDropAlgos(false);
      setDropMaze(true);
      setDropSpeed(false);
    } 
    // clicking on the speed drop down
    else {
      setDropAlgos(false);
      setDropMaze(false);
      setDropSpeed(true);
    }
    oldActiveBttn.current = newActiveBttn;
  }

  const retractDropDown = () => {
    setDropAlgos(false);
    setDropMaze(false);
    setDropSpeed(false);
    oldActiveBttn.current = null;
  }

  const changeBttnText = (e) => {
    if (e.target.children.length > 0) return;
    let newLabel;
    if (e.target.parentNode.parentNode.value === 'algorithms') {
      switch (e.target.textContent) {
        case "Dijkstra's Algorithm":
          newLabel = "Dijkstra's";
          break;
        case 'A* Search':
          newLabel = 'A*';
          break;
        case 'Greedy Best-first Search':
          newLabel = 'Greedy';
          break;
        case 'Swarm Algorithm':
          newLabel = 'Swarm';
          break;
        case 'Convergent Swarm Algorithm':
          newLabel = 'Convergent Swarm';
          break;
        case 'Bidirectional Swarm Algorithm':
          newLabel = 'Bidirectional Swarm';
          break;
        case 'Breadth-first Search':
          newLabel = 'BFS';
          break;
        case 'Depth-first Search':
          newLabel = 'DFS';
          break;
        default:
          break;
      }
      setStartBttnTxt(`Visualize ${newLabel}!`);
    } 
    else if (e.target.parentNode.parentNode.value === 'speed') {
      switch (e.target.textContent) {
        case 'Fast':
          newLabel = 'Speed: Fast';
          break;
        case 'Average':
          newLabel = 'Speed: Average';
          break;
        case 'Slow':
          newLabel = 'Speed: Slow';
          break;
        default:
          break;
      }
      setSpeedBttnTxt(newLabel);
    }
  }

  const runPathFinder = () => {
    switch(startBttnTxt) {
      case "Visualize Dijkstra's!": 
        dispatch('dijkstra');
        break;
      default:
        break;
    }
  }
  
  return (
    <>
      <Container>
        <h3>Pathfinder Visualizer</h3>
        <Console>
          <button
            className='drop-down-bttn console-bttn'
            value='algorithms'
            onClick={handleDropDown}
            onBlur={retractDropDown}
          >
            Algorithms
            <div className='caret'></div>
            {dropAlgos && (
              <DropDownContainer 
              onClick={changeBttnText}>
                <div>Dijkstra's Algorithm</div>
                <div>A* Search</div>
                <div>Greedy Best-first Search</div>
                <div>Swarm Algorithm</div>
                <div>Convergent Swarm Algorithm</div>
                <div>Bidirectional Swarm Algorithm</div>
                <div>Breadth-first Search</div>
                <div>Depth-first Search</div>
              </DropDownContainer>
            )}
          </button>
          <button
            className='drop-down-bttn console-bttn'
            value='maze & patterns'
            onClick={handleDropDown}
            onBlur={retractDropDown}
          >
            Maze & Patterns
            <div className='caret'></div>
            {dropMaze && (
              <DropDownContainer>
                <div>Recursive Division</div>
                <div>Recursive Division (vertical skew)</div>
                <div>Recursive Division (horizontal skew)</div>
                <div>Basic Random Maze</div>
                <div>Basic Weight Maze</div>
                <div>Simple Stair Pattern</div>
              </DropDownContainer>
            )}
          </button>
          <button className='console-bttn'>Add Bomb</button>
          <button className='start-bttn console-bttn'
          onClick={runPathFinder}
          >{startBttnTxt}</button>
          <button className='console-bttn'>Clear Board</button>
          <button className='console-bttn'>Clear Walls & Weights</button>
          <button className='console-bttn'>Clear Path</button>
          <button
            className='drop-down-bttn console-bttn'
            value='speed'
            onClick={handleDropDown}
            onBlur={retractDropDown}
          >
            {speedBttnTxt}
            <div className='caret'></div>
            {dropSpeed && (
              <DropDownContainer
              onClick={changeBttnText}
              >
                <div>Fast</div>
                <div>Average</div>
                <div>Slow</div>
              </DropDownContainer>
            )}
          </button>
        </Console>
      </Container>
    </>
  );
}

export default Header;