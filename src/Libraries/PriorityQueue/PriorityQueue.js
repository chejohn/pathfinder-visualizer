/*
    A binary heap will be used to implement a priority queue
*/
const priorityQueue = () => {
    const rep = [];
    let pqSize = 0;

    const sink = (parentIndex) => {
        while (true) {
          const leftIndex = 2 * parentIndex + 1;
          const rightIndex = 2 * parentIndex + 2;
          let smallest = leftIndex;

          if (rightIndex < pqSize && less(rightIndex, leftIndex))
            smallest = rightIndex;

          if (leftIndex >= pqSize || less(parentIndex, smallest)) break;

          swap(parentIndex, smallest);
          parentIndex = smallest; // traversing down the tree
        }
    }

    const swim = (childIndex) => {
        let parentIndex = Math.floor((childIndex - 1) / 2);

        while (childIndex > 0 && less(childIndex, parentIndex)) {
          swap(childIndex, parentIndex);
          childIndex = parentIndex; // traversing up the tree
          parentIndex = Math.floor((childIndex - 1) / 2);
        }
    }

    const less = (index1, index2) => {
        if (rep[index1].distanceFromStart < rep[index2].distanceFromStart) return true;
        return false;
    }

    const swap = (childIndex, parentIndex) => {
        const parentNode = rep[parentIndex]; 
        rep[parentIndex] = rep[childIndex];
        rep[childIndex] = parentNode;
    }   

    /*
    params: object with properties: node, distanceFromStart (priorityQueue node)
    returns: void
    */ 
    const insert = (pqNode) => {
        rep.push(pqNode);
        pqSize++;
        let childIndex = rep.length - 1;
        swim(childIndex);
    }

    /*
    params: void
    returns: priorityQueue node
    function: removes root node from priority queue
    */
    const poll = () => {
        swap(0, rep.length-1);
        const smallestNode = rep.pop();
        pqSize--;
        let parentIndex = 0;
        sink(parentIndex);
        return smallestNode;
    }
    
    /*
    params: node from graph; integer distance of that node from starting point
    returns: void
    */
    const updatePQNode = (graphNode, distanceFromOrigin) => {
        for (let i = 0; i < pqSize; i++) {
            if (JSON.stringify(rep[i].node) === JSON.stringify(graphNode)) {
                rep[i].distanceFromStart = distanceFromOrigin;
                const parentIndex = Math.floor((i-1)/2);
                const leftIndex = 2*i + 1;
                const rightIndex = 2*i + 2;
                if (parentIndex >= 0 && less(i, parentIndex)) swim(i);
                else if ((leftIndex < pqSize && less(leftIndex, i))|| 
                (rightIndex < pqSize && less(rightIndex, i))) sink(i);
                break;
            }
        }
    }

    return {insert, poll, updatePQNode,rep}
}

export default priorityQueue;