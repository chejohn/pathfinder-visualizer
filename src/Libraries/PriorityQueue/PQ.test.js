import priorityQueue from './PriorityQueue';

describe('priority queue library', () => {
    const pq = priorityQueue();
    const pq2 = priorityQueue();
    
    const pqNode1 = { node: 'node1', distanceFromStart: 1 };
    const pqNode2 = { node: 'node2', distanceFromStart: 4 };
    const pqNode3 = { node: 'node3', distanceFromStart: 3 };
    const pqNode4 = { node: 'node4', distanceFromStart: -1 };
    const pqNode5 = { node: 'node5', distanceFromStart: 0 };
    const pqNode6 = { node: 'node6', distanceFromStart: 9 };
    const pqNode7 = { node: 'node7', distanceFromStart: -66 };
    const pqNode8 = { node: 'node8', distanceFromStart: 1000 };

    const pq2Node = { node: 'node8', distanceFromStart: 5000 };
    pq2.insert(pq2Node);

    pq.insert(pqNode1);
    pq.insert(pqNode2);
    pq.insert(pqNode3);
    pq.insert(pqNode4);
    pq.insert(pqNode5);
    pq.insert(pqNode6);
    pq.insert(pqNode7);
    pq.insert(pqNode8);
    test('poll method', () => {
      expect(pq.poll()).toEqual({ node: 'node7', distanceFromStart: -66});
      expect(pq.poll()).toEqual({ node: 'node4', distanceFromStart: -1});
      expect(pq.poll()).toEqual({ node: 'node5', distanceFromStart: 0 });
      expect(pq.poll()).toEqual({ node: 'node1', distanceFromStart: 1 });
      expect(pq.poll()).toEqual({ node: 'node3', distanceFromStart: 3 });
      expect(pq.poll()).toEqual({ node: 'node2', distanceFromStart: 4 });
      expect(pq.poll()).toEqual({ node: 'node6', distanceFromStart: 9 });
      expect(pq.poll()).toEqual({ node: 'node8', distanceFromStart: 1000});
      
      expect(pq2.poll()).toEqual({ node: 'node8', distanceFromStart: 5000 });
    });
    test('update priority queue method', () => {
      pq.insert(pqNode1);
      pq.insert(pqNode2);
      pq.insert(pqNode3);
      pq.insert(pqNode4);
      pq.insert(pqNode5);
      pq.insert(pqNode6);
      pq.insert(pqNode7);
      pq.insert(pqNode8);
      pq.updatePQNode('node8', -200);
      pq.updatePQNode('node7', -150);
      pq.updatePQNode('node6', -100);
      pq.updatePQNode('node5', -50);
      pq.updatePQNode('node4', -10);
      pq.updatePQNode('node3', 70);
      pq.updatePQNode('node2', 80);
      pq.updatePQNode('node1', 90);
      expect(pq.poll()).toEqual({ node: 'node8', distanceFromStart: -200 });
      expect(pq.poll()).toEqual({ node: 'node7', distanceFromStart: -150 });
      expect(pq.poll()).toEqual({ node: 'node6', distanceFromStart: -100 });
      expect(pq.poll()).toEqual({ node: 'node5', distanceFromStart: -50});
      expect(pq.poll()).toEqual({ node: 'node4', distanceFromStart: -10});
      expect(pq.poll()).toEqual({ node: 'node3', distanceFromStart: 70});
      expect(pq.poll()).toEqual({ node: 'node2', distanceFromStart: 80});
      expect(pq.poll()).toEqual({ node: 'node1', distanceFromStart: 90});
    });
});