import PriorityQueue from "../PriorityQueue";
import {findHeuristic, reconstructPath} from "../../Helpers";

const solve = (startNode, endNode) => {
    const prev = new Map();
    prev.set(startNode.coordinates, null);
    const pq = PriorityQueue('GBF');

    let heuristic = findHeuristic(startNode, endNode);
    pq.insert({ node: startNode, heuristic });

    while (pq.queryPQSize() > 0) {
      const currentNode = pq.poll().node;
      currentNode.isVisited = true;
      if (
        JSON.stringify(currentNode.coordinates) ===
        JSON.stringify(endNode.coordinates)
      )
        break;
      const neighbors = currentNode.adjacentNodes.filter(
        (adjNode) => adjNode.type !== 'wallNode' && !adjNode.isVisited
      );
      for (let adjNode of neighbors) {
        heuristic = findHeuristic(adjNode, endNode);
        if (!pq.contains({ node: adjNode, heuristic })) {
          pq.insert({ node: adjNode, heuristic });
          prev.set(adjNode.coordinates, currentNode.coordinates);
        }
      }
    }
    return prev;
}

const greedyBestFirst = (startNode, endNode, bombNode=null) => {
    const prev = solve(startNode, endNode);
    return reconstructPath(endNode, prev);
}

export default greedyBestFirst;