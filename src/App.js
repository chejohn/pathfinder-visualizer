import Graph from "./Libraries/Graph";
import aStar from "./Libraries/A*";

const graph = Graph();
const startNode = graph.rep[0][50];
const endNode = graph.rep[3][50];
console.log(aStar(startNode, endNode));

function App() {
  return (
    <div className="App">
      hi
    </div>
  );
}

export default App;
