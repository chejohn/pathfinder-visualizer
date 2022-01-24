import React, {useEffect} from 'react';
import { Container, GridCells } from './Grid.styles';

const Grid = () => {
    const cells = [];
    useEffect(() => {
        for (let i = 0; i < 1020; i++) {
            const Cell = <div id={i}></div>
            cells.push(Cell);
        }   
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