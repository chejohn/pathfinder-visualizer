import Graph from './Libraries/Graph/Graph';
import priorityQueue from './Libraries/PriorityQueue/PriorityQueue';

const pq = priorityQueue();

const pqNode1 = { node: 'node1', distanceFromStart: 1 };
const pqNode2 = { node: 'node2', distanceFromStart: 4 };
const pqNode3 = { node: 'node3', distanceFromStart: 4 };
const pqNode4 = { node: 'node4', distanceFromStart: -1};
const pqNode5 = { node: 'node5', distanceFromStart: 0 };
const pqNode6 = { node: 'node6', distanceFromStart: 9 };
const pqNode7 = { node: 'node7', distanceFromStart: -66 };
const pqNode8 = { node: 'node8', distanceFromStart: 1000 };

pq.insert(pqNode1);
pq.insert(pqNode2);
pq.insert(pqNode3);
pq.insert(pqNode4);
pq.insert(pqNode5);
pq.insert(pqNode6);
pq.insert(pqNode7);
pq.insert(pqNode8);

console.log(pq.poll())
console.log(pq.poll());
console.log(pq.poll());
console.log(pq.poll());
console.log(pq.poll());
console.log(pq.poll());
console.log(pq.poll());
console.log(pq.poll());


// console.log(pq.poll())
// console.log(pq.poll());
// console.log(pq.poll());
// console.log(pq.poll());
// console.log(pq.poll());

function App() {
  return (
    <div className="App">
      hi
    </div>
  );
}

export default App;
