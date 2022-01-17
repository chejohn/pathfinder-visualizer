import depthFirst from ".";
import Graph from '../../Graph';

describe('depth-first search library', () => {
    const graph = Graph();
    const graph2 = Graph();
    const graph3 = Graph();
    for (let i = 0; i < 50; i++) {
        graph3.rep[8][i].type = 'wallNode';
    }
    test('depth-first search', () => {
        let startNode = graph.rep[11][40];
        let endNode = graph.rep[10][40];
        expect(depthFirst(startNode, endNode)).toBeDefined();

        startNode = graph2.rep[11][40];
        endNode = graph2.rep[9][40];
        expect(depthFirst(startNode, endNode)).toBeDefined();

        startNode = graph3.rep[0][0];
        endNode = graph3.rep[19][50];
        expect(depthFirst(startNode, endNode)).toBeDefined();
    });
});