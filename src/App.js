
import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from  'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';
import NoFound from './NoFound';

function App() {

   return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch> 
            {/* //only one route shows at one time ------one route for one page (we have now 1 page) */}
            <Route exact path="/">
              <Home/>   
            </Route>
            <Route exact path="/create">
              <Create/>
            </Route>
            <Route exact path="/blogs/:id">
              <BlogDetails/>
            </Route>
            <Route path="*">
              <NoFound/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
