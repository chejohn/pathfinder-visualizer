import Graph from './Graph';

describe('graph library', () => {
    const graph = Graph();
    
    test('graph constructor', () => {
        expect(graph.rep[0][0]).toBeDefined();
        expect(graph.rep[19][50]).toBeDefined();
    });

    test('corner nodes', () => {
        const topLeft = graph.rep[0][0];
        const topRight = graph.rep[0][50];
        const bottomLeft = graph.rep[19][0];
        const bottomRight = graph.rep[19][50]

        expect(topLeft.adjacentNodes.length).toBe(2);
        expect(topRight.adjacentNodes.length).toBe(2);
        expect(bottomLeft.adjacentNodes.length).toBe(2);
        expect(bottomRight.adjacentNodes.length).toBe(2);
    });

    test('edge nodes', () => {
        const topEdge = graph.rep[0][3];
        const leftEdge = graph.rep[11][0];
        const rightEdge = graph.rep[12][50];
        const bottomEdge = graph.rep[19][3];

        expect(topEdge.adjacentNodes.length).toBe(3);
        expect(leftEdge.adjacentNodes.length).toBe(3);
        expect(rightEdge.adjacentNodes.length).toBe(3);
        expect(bottomEdge.adjacentNodes.length).toBe(3);
    });

    test('non edge nor corner node', () => {
        const randNode = graph.rep[8][30];
        expect(randNode.adjacentNodes.length).toBe(4);
    })
});