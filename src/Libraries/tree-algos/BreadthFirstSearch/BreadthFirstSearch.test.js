import breadthFirst from ".";
import Graph from '../../Graph';

describe('breadth-first-search library', () => {
    const graph = Graph();
    const graph2 = Graph();
    const graph3 = Graph();
    test('breadth-first-search', () => {
        let startNode = graph.rep[11][40];
        let endNode = graph.rep[10][40];
        expect(breadthFirst(startNode, endNode)).toBeDefined();
        
        startNode = graph2.rep[11][40];
        endNode = graph2.rep[9][40];
        expect(breadthFirst(startNode, endNode)).toBeDefined();
        
        graph3.setWallNode([10, 40]);
        graph3.setWallNode([10, 39]);
        startNode = graph3.rep[11][40];
        endNode = graph3.rep[9][40];
        expect(breadthFirst(startNode, endNode)).toBeDefined();
    });
});