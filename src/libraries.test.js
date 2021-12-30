import Graph from '.Libraries/Graph';

describe('graph constructor', () => {
    const grid = Graph();
    test('nodes are added and given references',() => {
        expect(grid[0][0]).toBeUndefined();
    });
});