import Node from './Node';

// we need to construct the graph
const Graph = () => {
  const rep = [];
  let startNode = null;
  let endNode = null;
  let bombNode = null;

  // frist: add the nodes to the graph
  for (let i = 0; i < 20; i++) {
    let row = [];
    for (let j = 0; j < 51; j++) {
      const node = Node([i, j]);
      row.push(node);
    }
    rep.push(row);
  }

  // second: give nodes references
  for (let i = 0; i < 20; i++) {
    for (let j = 0; j < 51; j++) {
      const node = rep[i][j];
      const coordinates = JSON.stringify([i, j]);

      if (
        coordinates === '[0,0]' ||
        coordinates === '[0,50]' ||
        coordinates === '[19,0]' ||
        coordinates === '[19,50]'
      ) {
        if (coordinates === '[0,0]') {
          node.adjacentNodes.push(rep[0][1]);
          node.adjacentNodes.push(rep[1][0]);
        } else if (coordinates === '[0,50]') {
          node.adjacentNodes.push(rep[0][49]);
          node.adjacentNodes.push(rep[1][50]);
        } else if (coordinates === '[19,0]') {
          node.adjacentNodes.push(rep[18][0]);
          node.adjacentNodes.push(rep[19][1]);
        } else if (coordinates === '[19,50]') {
          node.adjacentNodes.push(rep[18][50]);
          node.adjacentNodes.push(rep[19][49]);
        }
      } else if (i === 0 || i === 19 || j === 0 || j === 50) {
        if (i === 0) {
          node.adjacentNodes.push(rep[1][j]);
          node.adjacentNodes.push(rep[0][j-1]);
          node.adjacentNodes.push(rep[0][j+1]);
        } else if (i === 19) {
          node.adjacentNodes.push(rep[18][j]);
          node.adjacentNodes.push(rep[19][j-1]);
          node.adjacentNodes.push(rep[19][j+1]);
        } else if (j === 0) {
          node.adjacentNodes.push(rep[i][1]);
          node.adjacentNodes.push(rep[i-1][0]);
          node.adjacentNodes.push(rep[i+1][0]);
        } else if (j === 50) {
          node.adjacentNodes.push(rep[i][49]);
          node.adjacentNodes.push(rep[i-1][50]);
          node.adjacentNodes.push(rep[i+1][50]);
        }
      } else {
        node.adjacentNodes.push(rep[i-1][j]);
        node.adjacentNodes.push(rep[i+1][j]);
        node.adjacentNodes.push(rep[i][j-1]);
        node.adjacentNodes.push(rep[i][j+1]);
      }
    }
  }

  const setStartNode = ([row, col]) => {
    startNode = rep[row][col];
  } 

  const setEndNode = ([row, col]) => {
    endNode = rep[row][col];
  }

  const setBombNode = ([row, col]) => {
    bombNode = rep[row][col];
  }
  return {rep, setStartNode, setEndNode, setBombNode};
} 

export default Graph;