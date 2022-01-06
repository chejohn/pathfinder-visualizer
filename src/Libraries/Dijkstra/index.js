import PriorityQueue from '../PriorityQueue';
import reconstructPath from '../Helpers/reconstructPath';

/*
params: startNode; priorityQueue
returns: void
function: conducts a breadth-first search begining at the starting node. 
          Once a node is visited it is added to the priority queue along with
          the node's distance from the start node.
*/
export const buildPQ = (startNode, priorityQueue) => {
    const queue = [];
    startNode.isVisited = true;
    queue.push(startNode);
    
    while(queue.length > 0) {
        const currNode = queue.shift();
        const pqNode = {node: currNode};
        if (JSON.stringify(currNode.coordinates) === JSON.stringify(startNode.coordinates)) {
            pqNode.distanceFromStart = 0;
        } else {
            pqNode.distanceFromStart = Infinity;
        }
        priorityQueue.insert(pqNode);
        const neighbours = currNode.adjacentNodes.filter(adjNode => adjNode.type !== 'wallNode' && !adjNode.isVisited);
        for (let adjNode of neighbours) {
            adjNode.isVisited = true;
            queue.push(adjNode);
        }
    }
}

const solve = (startNode, endNode) => {
    const pq = PriorityQueue();
    const prev = new Map();
    buildPQ(startNode, pq);
    for (let pqNode of pq.rep) {
        prev.set(pqNode.node.coordinates, null);
        // reset previously visited nodes during breadth-first search
        // to not visited
        pqNode.node.isVisited = false;
    };

    while (pq.queryPQSize() > 0) {
        let endNodeFound = false;
        const currNodes = [];
        const shortestDistance = pq.rep[0].distanceFromStart;
        while (pq.rep[0].distanceFromStart === shortestDistance) {
            currNodes.push(pq.poll().node);
        }
        for (let node of currNodes) {
            node.isVisited = true;
            if (JSON.stringify(node.coordinates) === JSON.stringify(endNode.coordinates)) {
                endNodeFound = true;
                break;
            }
            const neighbors = node.adjacentNodes.filter(adjNode => adjNode.type !== 'wallNode' 
            && !adjNode.isVisited);
            for (let adjNode of neighbors) {
                const distanceFromOrigin = 1 + shortestDistance;
                const updated = pq.updatePQNode(adjNode, distanceFromOrigin);
                if (updated) prev.set(adjNode.coordinates, node.coordinates);
            }
        }
        if (endNodeFound) break;
    }
    return prev;
}

const dijkstra = (startNode, endNode, bombNode=null) => {
    const prev = solve(startNode, endNode);
    return reconstructPath(endNode, prev);
}

export default dijkstra;