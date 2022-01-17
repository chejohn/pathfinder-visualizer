import Graph from '../../Graph';
import aStar from '.';

describe('aStar library', () => {
    const graph = Graph();
    const graph2 = Graph();
    test('aStar algo', () => {
        let startNode = graph.rep[0][50];
        let endNode = graph.rep[3][50];
        expect(aStar(startNode, endNode)).toEqual([[0, 50], [1, 50], [2,50], [3,50]]);
        startNode = graph2.rep[0][0];
        endNode = graph2.rep[19][50];
        for (let i = 0; i < 50; i++) {
            graph2.rep[10][i].type = 'wallNode';
        }
        expect(aStar(startNode, endNode)).toBeDefined();
    });
});