/*
    returns: Manhattan (estimated) distance between current node and 
             end node.
*/
const findHeuristic = (currentNode, endNode) => {
  const [currX, currY] = currentNode.coordinates;
  const [endX, endY] = endNode.coordinates;
  return Math.abs(currX - endX) + Math.abs(currY - endY);
};

/*
params: startNode; endNode; hashMap of nodes mapping to their respective previous nodes
returns: shortest path between starting and ending node
*/
const reconstructPath = (endNode, prev) => {
  const path = [];
  for (
    let currNode = endNode.coordinates;
    currNode !== null;
    currNode = prev.get(currNode)
  ) {
    path.push(currNode);
  }
  path.reverse();
  return path;
};

const convertToDataID = ([x, y]) => x * 51 + y;

export {findHeuristic, reconstructPath, convertToDataID};


