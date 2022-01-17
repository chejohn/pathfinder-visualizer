import greedyBestFirst from ".";
import Graph from "../../Graph";

describe('greedy best first search library', () => {
    const graph = Graph();
    const graph2 = Graph();
    test('gbf-search algo', () => {
        let startNode = graph.rep[0][19];
        let endNode = graph.rep[18][19];
        expect(greedyBestFirst(startNode, endNode)).toBeDefined();

        for (let i = 0; i < 50; i++) {
            graph2.rep[10][i].type = 'wallNode';
        }
        startNode = graph2.rep[0][8];
        endNode = graph2.rep[18][21];
        expect(greedyBestFirst(startNode, endNode)).toBeDefined();
    });
});