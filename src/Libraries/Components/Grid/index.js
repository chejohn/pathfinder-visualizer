import {useEffect, useState} from 'react';
import { Container, GridCells } from './Grid.styles';
import arrow from '../../../Assets/arrow.svg';
import target from '../../../Assets/target.svg';
import Graph from '../../Graph';
import { convertToDataID } from '../../Helpers';

const onDropHandler = (e) => {
  e.preventDefault();
  e.stopPropagation();
  if (!e.target.getAttribute('dataid') || e.target.id === 'arrow'
  || e.target.id === 'target') {
    document.getElementById('target').classList.remove('drag-start-effect');
    document.getElementById('arrow').classList.remove('drag-start-effect');
    window.removeEventListener('drop', onDropHandler);
    window.removeEventListener('dragover', onDragOverHandler);
    return;
  }
  const droppedElementID = e.dataTransfer.getData('text/plain');
  const droppedElement = document.getElementById(droppedElementID);
  e.target.appendChild(droppedElement);
  droppedElement.classList.remove('drag-start-effect');
}

const onDragStartHandler = (e) => {
  e.dataTransfer.effectAllowed = 'copyMove';
  e.dataTransfer.setData('text/plain', e.target.id);
  e.target.classList.add('drag-start-effect');
  window.addEventListener('drop', onDropHandler);
  window.addEventListener('dragover', onDragOverHandler);
}

const onDragOverHandler = (e) => {
  e.preventDefault();
}

const Grid = () => {
    const [currentGraph, updateGraph] = useState(Graph());
    const [cells, updateCells] = useState(null);
    
    // run on initial render
    useEffect(() => {
      const graphCopy = {...currentGraph};
      graphCopy.setStartNode([9, 12]);
      graphCopy.setEndNode([9, 38]);
      const newCells = [];

      for (let i = 0; i < 20; i++) {
        for (let j = 0; j < 51; j++) {
          let Img;
          if (i === 9 && j === 12) {
            Img = (
              <img
                src={arrow}
                id='arrow'
                alt='arrow'
                draggable={true}
                onDragStart={onDragStartHandler}
              ></img>
            );
          } 
          else if (i === 9 && j === 38) {
            Img = (
              <img
                src={target}
                id='target'
                alt='target'
                draggable={true}
                onDragStart={onDragStartHandler}
              ></img>
            );
          }
          const Cell = Img ? (
            <div
              onDrop={onDropHandler}
              dataid={convertToDataID([i, j])}
              key={convertToDataID([i, j])}
              onDragOver={onDragOverHandler}
            >
              {Img}
            </div>
          ) : (
            <div
              onDrop={onDropHandler}
              dataid={convertToDataID([i, j])}
              key={convertToDataID([i, j])}
              onDragOver={onDragOverHandler}
            ></div>
          );
          newCells.push(Cell);
        }
      }
      updateCells(newCells);
      updateGraph(graphCopy);
    }, []);
    
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