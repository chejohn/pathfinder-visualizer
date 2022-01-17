import {reconstructPath} from "../../Helpers";

/*
params: startNode; endNode
returns: hashMap of nodes mapping to their respective previous nodes
*/
const solve = (startNode, endNode) => {
    const queue = [];
    const prev = new Map();
    startNode.isVisited = true;
    queue.push(startNode);
    prev.set(startNode.coordinates, null);

    while (queue.length > 0) {
        const currNode = queue.shift();
        if (JSON.stringify(currNode.coordinates) === JSON.stringify(endNode.coordinates)) break;
        const neighbours = currNode.adjacentNodes.filter(adjNode => adjNode.type !== 'wallNode' && !adjNode.isVisited);
        for (let adjNode of neighbours) {
            adjNode.isVisited = true;
            queue.push(adjNode);
            prev.set(adjNode.coordinates, currNode.coordinates);
        }
    }
    return prev;
}

const breadthFirst = (startNode, endNode, bombNode=null) => {
    const prev = solve(startNode, endNode);
    return reconstructPath(endNode, prev);
}

export default breadthFirst;