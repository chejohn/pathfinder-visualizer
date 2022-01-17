/*
    find a mapping between nodes and distance from starting vertex
*/ 
const Node = (coordinates) => ({
    coordinates,
    isVisited: false,
    adjacentNodes: [],
    type: 'blankCell'
});

export default Node;