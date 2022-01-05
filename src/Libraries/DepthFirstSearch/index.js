/*
params: startNode; endNode; hashMap of nodes mapping to their respective previous nodes
returns: path between starting and ending node (not necessarily the shortest path)
*/
const reconstructPath = (endNode, prev) => {
    const path = [];
    for (let currNode = endNode.coordinates; currNode !== null; currNode = prev.get(currNode)) {
        path.push(currNode);
    }
    path.reverse();
    return path;
};

/*
params: startNode; endNode
returns: hashMap of nodes mapping to their respective previous nodes
*/
const solve = (startNode, endNode) => {
  const stack = [];
  const prev = new Map();
  stack.push(startNode);
  startNode.isVisited = true;
  prev.set(startNode.coordinates, null);

  while (stack.length > 0) {
    const currNode = stack.pop();
    if (
      JSON.stringify(currNode.coordinates) ===
      JSON.stringify(endNode.coordinates)
    )
      break;
    const neighbors = currNode.adjacentNodes.filter(
      (adjNode) => adjNode.type !== 'wallNode' && !adjNode.isVisited
    );
    for (let adjNode of neighbors) {
      stack.push(adjNode);
      adjNode.isVisited = true;
      prev.set(adjNode.coordinates, currNode.coordinates);
    }
  }
  return prev;
};

const depthFirst = (startNode, endNode, bombNode = null) => {
  const prev = solve(startNode, endNode);
  return reconstructPath(endNode, prev);
};

export default depthFirst;
