/*
    A binary heap will be used to implement a priority queue
*/
const priorityQueue = () => {
    const rep = [];

    const less = (childIndex, parentIndex) => {
        if (rep[childIndex].distanceFromStart < rep[parentIndex].distanceFromStart) return true;
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
        let childIndex = rep.length-1;
        let parentIndex = Math.floor((childIndex-1)/2);
        while (childIndex > 0 && less(childIndex, parentIndex)) {
            swap(childIndex, parentIndex);
            childIndex = parentIndex;
            parentIndex = Math.floor((childIndex - 1) / 2);
        }
    }

    /*
    params: void
    returns: priorityQueue node
    */
    const poll = () => {
        swap(0, rep.length-1);
        const parentIndex = 0;
        while(true) {
            
        }
        return rep.pop();
    }

    return {insert, poll}
}

export default priorityQueue;