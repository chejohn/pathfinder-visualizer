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

export default reconstructPath;