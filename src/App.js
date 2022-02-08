import {useReducer, useEffect} from 'react';
import GlobalStyle from "./Libraries/Components/GlobalStyles";
import Header from "./Libraries/Components/Header";
import Reference from "./Libraries/Components/Reference";
import Grid from "./Libraries/Components/Grid";

const initialState = {
  algo: null
}

const reducer = (state, action) => {
  switch  (action) {
    case 'dijkstra':
      return {...state, algo: 'dijkstra'}
    case null:
      return {...state, algo: null}
      default:
      return;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className='App'>
      <GlobalStyle />
      <Header dispatch={dispatch}/>
      <Reference />
      <Grid/>
    </div>
  );
}

export default App;
