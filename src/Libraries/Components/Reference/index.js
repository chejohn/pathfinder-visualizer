import React from 'react';
import { Container, Legend} from './Reference.styles';
import arrow from '../../../Assets/arrow.svg';
import targetNode from '../../../Assets/target.svg';
import bombNode from '../../../Assets/bomb-node.svg';
import weightNode from '../../../Assets/weight-node.svg';

const Reference = () => (
  <Container>
    <Legend>
      <img src={arrow} alt='arrow' />
      <span>Start Node</span>
    </Legend>
    <Legend>
      <img src={targetNode} alt='target node' />
      <span>Target Node</span>
    </Legend>
    <Legend>
      <img src={bombNode} alt='bomb node' />
      <span>Bomb Node</span>
    </Legend>
    <Legend>
      <img src={weightNode} alt='weight node' />
      <span>Weight Node</span>
    </Legend>
    <Legend>
      <div className='cell cell-blue-border'></div>
      <span>Unvisited Node</span>
    </Legend>
    <Legend>
      <div
        className='cell cell-blue-border'
        style={{
          backgroundColor: 'var(--visited-primary)',
          marginRight: '14px',
        }}
      ></div>
      <div
        className='cell cell-blue-border'
        style={{ backgroundColor: 'var(--visted-secondary)' }}
      ></div>
      <span>Visited Nodes</span>
    </Legend>
    <Legend>
      <div
        className='cell'
        style={{ backgroundColor: 'var(--path-color)' }}
      ></div>
      <span>Shortest-path Node</span>
    </Legend>
    <Legend>
      <div
        className='cell'
        style={{ backgroundColor: 'var(--wall-color)' }}
      ></div>
      <span>Wall Node</span>
    </Legend>
  </Container>
);

export default Reference;
