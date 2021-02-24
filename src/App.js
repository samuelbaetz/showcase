import Navigation from './components/navigation'
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './pages/Home'
import Showcase from './pages/Showcase'
import Blog from './pages/Blog'
import Wrapper from './components/wrapper'
function App() {
  return (
    <Router>
    <div className="App">
      
      <Navigation/>
      <Wrapper>
      <Switch>
      <Route exact path='/' component={Home}></Route>
      <Route path='/showcase' component={Showcase}></Route>
      <Route path='/blog' component={Blog}></Route>
      </Switch>
      </Wrapper>
      <footer class="bg-light text-center text-lg-start">
 
  <div class="text-center p-3">
    © 2020 Copyright: 
    <a class="text-dark" href="#"> Samuel Baetz</a>
  </div>
 
</footer>
    </div>
    </Router>
  );
}

export default App;
