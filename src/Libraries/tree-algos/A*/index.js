import PriorityQueue from "../PriorityQueue";
import {findHeuristic, reconstructPath} from "../../Helpers";

const solve = (startNode, endNode) => {
    // gVals: coordinates => gVal
    const gVals = new Map();
    const prev = new Map();
    prev.set(startNode.coordinates, null);
    const open = PriorityQueue('A*');

    const gVal = 0;
    gVals.set(startNode.coordinates, gVal);
    let heuristic = findHeuristic(startNode, endNode);
    let fVal = gVal + heuristic;
    open.insert({ node: startNode, fVal });
    while (open.queryPQSize() > 0) {
        const currNode = open.poll().node;
        currNode.isVisited = true;
        if (JSON.stringify(currNode.coordinates) === JSON.stringify(endNode.coordinates)) break;
        const neighbors = currNode.adjacentNodes.filter(adjNode => adjNode.type !== 'wallNode' && !adjNode.isVisited);
        for (let adjNode of neighbors) {
            const newGVal = gVals.get(currNode.coordinates) + 1;
            const oldGval = gVals.get(adjNode.coordinates);
            if (oldGval !== undefined && oldGval <= newGVal) continue;
            else {
                gVals.set(adjNode.coordinates, newGVal);
                heuristic = findHeuristic(adjNode, endNode);
                fVal = heuristic + newGVal;
                prev.set(adjNode.coordinates, currNode.coordinates);
                if (oldGval === undefined) {
                    open.insert({ node: adjNode, fVal });
                }
                else if (newGVal < oldGval) open.updatePQNode(adjNode, fVal);
            }
        }
    }
    return prev;
}

const aStar = (startNode, endNode, bombNode=null) => {
    const prev = solve(startNode, endNode);
    return reconstructPath(endNode, prev);
}

export default aStar;