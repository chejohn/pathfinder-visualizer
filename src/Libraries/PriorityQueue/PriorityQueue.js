/*
    A binary heap will be used to implement a priority queue
*/
const priorityQueue = () => {
    const rep = [];
    let pqSize = 0;

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
        let childIndex = rep.length-1;
        let parentIndex = Math.floor((childIndex-1)/2); 
        
        // swim operation
        while (childIndex > 0 && less(childIndex, parentIndex)) {
            swap(childIndex, parentIndex);
            childIndex = parentIndex; // traversing up the tree
            parentIndex = Math.floor((childIndex - 1) / 2);
        }
    }

    /*
    params: void
    returns: priorityQueue node
    */
    const poll = () => {
        swap(0, rep.length-1);
        const smallestNode = rep.pop();
        pqSize--;
        let parentIndex = 0;
        
        // sink operation
        while(true) {
            const leftIndex = 2*parentIndex+1;
            const rightIndex = 2*parentIndex+2;
            let smallest = leftIndex;

            if (rightIndex < pqSize && less(rightIndex, leftIndex)) smallest = rightIndex;
            
            if (leftIndex >= pqSize || less(parentIndex, smallest)) break;

            swap(parentIndex, smallest);
            parentIndex = smallest; // traversing down the tree
        }
        return smallestNode;
    }

    return {insert, poll, rep}
}

export default priorityQueue;