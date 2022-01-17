import {buildPQ} from '.';
import PriorityQueue from '../PriorityQueue';
import Graph from '../../Graph';
import dijkstra from '.';

describe('Dijkstra library', () => {
    const graph = Graph();
    const pq = PriorityQueue('dijkstra');
    test('build priority queue method', () => {
        const startNode = graph.rep[0][5];
        for (let i = 0; i < 51; i++) {
            graph.rep[10][i].type ='wallNode';
        }
        buildPQ(startNode, pq);
        expect(pq.queryPQSize()).toEqual(510);
        expect(pq.rep[0].distanceFromStart).toEqual(0);
    });

    const graph2 = Graph();
    const graph3 = Graph();
    test('dijkstra algorithm', () => {
        let startNode = graph2.rep[0][5];
        let endNode = graph2.rep[10][15];
        expect(dijkstra(startNode, endNode)).toBeDefined();

        startNode = graph3.rep[0][0];
        endNode = graph3.rep[19][50];
        for (let i = 0; i < 50; i++) {
            graph3.rep[10][i].type = 'wallNode';
        }
        expect(dijkstra(startNode, endNode)).toBeDefined();

    });
});