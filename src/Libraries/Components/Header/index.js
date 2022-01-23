import React, {useState} from 'react';
import { Container, Console, DropDownContainer } from './Header.styles';

const Header = () => {
    

    return (
      <>
        <Container>
          <h3>Pathfinder Visualizer</h3>
          <Console>
            <button
              className='drop-down console-bttn'
              id='0'
            >
              Algorithms
              <div className='caret'></div>
              {/* {dropAlgos && (
                <DropDownContainer>
                  <button>Dijkstra's Algorithm</button>
                  <button>A* Search</button>
                  <button>Greedy Best-first Search</button>
                  <button>Swarrm Algorithm</button>
                  <button>Convergent Swarm Algorithm</button>
                  <button>Bidirectional Swarm Algorithm</button>
                  <button>Breadth-first Search</button>
                  <button>Depth-first Search</button>
                </DropDownContainer>
              )} */}
            </button>
            <button
              className='drop-down console-bttn'
              id='1'
            >
              Maze & Patterns
              <div className='caret'></div>
              {/* {dropMaze && (
                <DropDownContainer>
                  <button>Recursive Division</button>
                  <button>Recursive Division (vertical skew)</button>
                  <button>Recursive Division (horizontal skew)</button>
                  <button>Basic Random Maze</button>
                  <button>Basic Weight Maze</button>
                  <button>Simple Stair Pattern</button>
                </DropDownContainer>
              )} */}
            </button>
            <button className='console-bttn'>Add Bomb</button>
            <button className='start-bttn console-bttn'>
              Pick an Algorithm!
            </button>
            <button className='console-bttn'>Clear Board</button>
            <button className='console-bttn'>Clear Walls & Weights</button>
            <button className='console-bttn'>Clear Path</button>
            <button
              className='drop-down console-bttn'
              id='2'
            >
              Speed: Fast
              <div className='caret'></div>
              {/* {dropSpeed && (
                <DropDownContainer>
                  <button>Fast</button>
                  <button>Average</button>
                  <button>Slow</button>
                </DropDownContainer>
              )} */}
            </button>
          </Console>
        </Container>
      </>
    );
}

export default Header;