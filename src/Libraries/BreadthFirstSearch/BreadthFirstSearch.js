/*
params: startNode; endNode; hashMap of nodes mapping to their respective previous nodes
returns: shortest path between starting and ending node
*/
const reconstructPath = (endNode, prev) => {
    const path = [];
    for (let currNode = endNode.coordinates; currNode !== null; currNode = prev.get(currNode)) {
        path.push(currNode);
    }
    path.reverse();
    return path;
}

/*
params: startNode; endNode
returns: hashMap of nodes mapping to their respective previous nodes
*/
const solve = (startNode, endNode) => {
    const queue = [];
    const prev = new Map();
    queue.push(startNode);
    startNode.isVisited = true;
    prev.set(startNode.coordinates, null);

    while (queue.length > 0) {
        const currNode = queue.shift();
        if (JSON.stringify(currNode.coordinates) === JSON.stringify(endNode.coordinates)) break;
        const neighbours = currNode.adjacentNodes.filter(adjNode => adjNode.type !== 'wallNode' && !adjNode.isVisited);
        for (let adjNode of neighbours) {
            if (!adjNode.isVisited) {
                queue.push(adjNode);
                adjNode.isVisited = true;
                prev.set(adjNode.coordinates, currNode.coordinates);
            }
        }
    }
    return prev;
}

const breadthFirst = (startNode, endNode, bombNode='') => {
    const prev = solve(startNode, endNode);
    return reconstructPath(endNode, prev);
}

export default breadthFirst;