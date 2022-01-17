import PriorityQueue from '.';
import Graph from '../../Graph';

describe('priority queue library', () => {
    const pq = PriorityQueue('dijkstra');
    const pq2 = PriorityQueue('A*');
    const graph = Graph();

    const node1 = graph.rep[0][0];
    const node2 = graph.rep[19][50];
    const node3 = graph.rep[0][5];
    const node4 = graph.rep[11][2];
    const node5 = graph.rep[3][19];
    const node6 = graph.rep[0][50];

    pq.insert({node: node1, distanceFromStart: 10});
    pq.insert({ node: node2, distanceFromStart: 9});
    pq.insert({ node: node3, distanceFromStart: 8 });
    pq.insert({ node: node4, distanceFromStart: 7});
    pq.insert({ node: node5, distanceFromStart: -6 });
    pq.insert({ node: node6, distanceFromStart: -100 });

    test('poll method', () => {
      expect(pq.poll().node.coordinates).toEqual(node6.coordinates);
      expect(pq.poll().node.coordinates).toEqual(node5.coordinates);
      expect(pq.poll().node.coordinates).toEqual(node4.coordinates);
      expect(pq.poll().node.coordinates).toEqual(node3.coordinates);
      expect(pq.poll().node.coordinates).toEqual(node2.coordinates);
      expect(pq.poll().node.coordinates).toEqual(node1.coordinates);
    });

    test('update priority queue method', () => {
      pq.insert({ node: node1, distanceFromStart: 10 });
      pq.insert({ node: node2, distanceFromStart: 9 });
      pq.insert({ node: node3, distanceFromStart: 8 });
      pq.insert({ node: node4, distanceFromStart: 7 });
      pq.insert({ node: node5, distanceFromStart: 6 });
      pq.insert({ node: node6, distanceFromStart: 5 });

      pq.updatePQNode(node1, -1000);
      pq.updatePQNode(node2, -900);
      pq.updatePQNode(node3, -800);
      pq.updatePQNode(node4, -700);
      pq.updatePQNode(node5, -600);
      pq.updatePQNode(node6, -500);

      expect(pq.poll().node.coordinates).toEqual(node1.coordinates);
      expect(pq.poll().node.coordinates).toEqual(node2.coordinates);
      expect(pq.poll().node.coordinates).toEqual(node3.coordinates);
      expect(pq.poll().node.coordinates).toEqual(node4.coordinates);
      expect(pq.poll().node.coordinates).toEqual(node5.coordinates);
      expect(pq.poll().node.coordinates).toEqual(node6.coordinates);
    });

    test('priority queue for A*', () => {
      pq2.insert({ node: node1, fVal: 10 });
      pq2.insert({ node: node2, fVal: 9 });
      pq2.insert({ node: node3, fVal: 8 });
      pq2.insert({ node: node4, fVal: 7 });
      pq2.insert({ node: node5, fVal: 6 });
      pq2.insert({ node: node6, fVal: 5 });

      expect(pq2.poll().node.coordinates).toEqual(node6.coordinates);
      expect(pq2.poll().node.coordinates).toEqual(node5.coordinates);
      expect(pq2.poll().node.coordinates).toEqual(node4.coordinates);
      expect(pq2.poll().node.coordinates).toEqual(node3.coordinates);
      expect(pq2.poll().node.coordinates).toEqual(node2.coordinates);
      expect(pq2.poll().node.coordinates).toEqual(node1.coordinates);
    });

});