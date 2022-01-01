import priorityQueue from './PriorityQueue';

describe('priority queue library', () => {
    const pq = priorityQueue();
    
    const pqNode1 = {node:'node1', distanceFromStart: 1};
    const pqNode2 = { node: 'node2', distanceFromStart: 4 };
    const pqNode3 = { node: 'node3', distanceFromStart: 4 };
    const pqNode4 = { node: 'node4', distanceFromStart: 0};
    const pqNode5 = { node: 'node5', distanceFromStart: 9};
    pq.insert(pqNode1);
    pq.insert(pqNode2);
    pq.insert(pqNode3);
    pq.insert(pqNode4);
    pq.insert(pqNode5);
    test('insert method', () => {
      expect(pq.rep[0]).toEqual({ node: 'node4', distanceFromStart: 0});
    });
});