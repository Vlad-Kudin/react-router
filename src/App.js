import { Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';

function App() {
  return <div>
    <Route path='/home'>
      <Home />
    </Route>
    <Route path='/home'>
      <About />
    </Route>
  </div>;
}

export default App;
