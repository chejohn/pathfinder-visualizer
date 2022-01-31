import React, {useEffect, useState} from 'react';
import { Container, GridCells } from './Grid.styles';
import arrow from '../../../Assets/arrow.svg';
import target from '../../../Assets/target.svg';

const Grid = () => {
    const cells = [];
    for (let i = 0; i < 1020; i++) {
      let Img;
      if (i === 471) {
        Img = <img src={arrow} id="arrow" alt="arrow" draggable={true}
        onDragStart={(e) => { 
          e.dataTransfer.setData('text/plain', e.target.id);
        }}
        />
      }
      else if (i === 497) Img = <img src={target} id="target" alt="target" draggable={true}></img>
      const Cell = Img ? <div onDrop={(e) => {
        e.preventDefault();
        console.log('was dropped')
        const droppedElementID = e.dataTransfer.getData('text/plain');
        const droppedElement = document.getElementById(droppedElementID);
        e.target.appendChild(droppedElement);
      }} key={i}>{Img}</div> : <div onDrop={(e) => {
        e.preventDefault();
        console.log('was dropped');
        const droppedElementID = e.dataTransfer.getData('text/plain');
        const droppedElement = document.getElementById(droppedElementID);
        e.target.appendChild(droppedElement);
      }} key={i}></div>
      cells.push(Cell);
    }

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