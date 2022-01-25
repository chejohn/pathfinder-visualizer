import React, {useEffect, useState} from 'react';
import { Container, GridCells } from './Grid.styles';
import arrow from '../../../Assets/arrow.svg';
import target from '../../../Assets/target.svg';

const Grid = () => {
    const cells = [];
    for (let i = 0; i < 1020; i++) {
      let Img;
      if (i === 471) Img = <img src={arrow} className="arrow" alt="arrow"/>
      else if (i === 497) Img = <img src={target} className="target" alt="target"></img>
      const Cell = Img ? <div key={i}>{Img}</div> : <div key={i}></div>
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