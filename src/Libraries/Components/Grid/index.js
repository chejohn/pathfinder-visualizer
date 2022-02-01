import React, {useEffect, useState} from 'react';
import { Container, GridCells } from './Grid.styles';
import arrow from '../../../Assets/arrow.svg';
import target from '../../../Assets/target.svg';

const onDropHandler = (e) => {
  // if (!e.target.getAttribute('dataid')) {
  //   document.getElementById('arrow').classList.remove('drag-start-effect');
  // }
  e.preventDefault();
  const droppedElementID = e.dataTransfer.getData('text/plain');
  const droppedElement = document.getElementById(droppedElementID);
  e.target.appendChild(droppedElement);
  droppedElement.classList.remove('drag-start-effect');
}

const onDragStartHandler = (e) => {
  e.dataTransfer.setData('text/plain', e.target.id);
  e.dataTransfer.effectAllowed = 'copyMove';
  // e.target.classList.add('drag-start-effect');
}

const onDragOverHandler = (e) => {
  e.preventDefault();
}

const initializeGrid = () => {
  const cells = [];
  for (let i = 0; i < 1020; i++) {
    let Img;
    if (i === 471) {
      Img = (
        <img
          src={arrow}
          id='arrow'
          alt='arrow'
          draggable={true}
          onDragStart={onDragStartHandler}
        />
      );
    } 
    else if (i === 497)
      Img = (
        <img
          src={target}
          id='target'
          alt='target'
          draggable={true}
          onDragStart={onDragStartHandler}
        ></img>
      );
    const Cell = Img ? (
      <div onDrop={onDropHandler} dataid={i} key={i} onDragOver={onDragOverHandler}>{Img}
      </div>
    ) : (
      <div onDrop={onDropHandler} dataid={i} key={i} onDragOver={onDragOverHandler}></div>
    );
    cells.push(Cell);
  }
  return cells;
}

const Grid = () => {
    const cells = initializeGrid();
    return (
      <Container>
        <div style={{ fontSize: '18px'}}>
          Pick an algorithm and visualize it!
        </div>
        <GridCells>{cells}</GridCells>
      </Container>
    );
};

export default Grid;