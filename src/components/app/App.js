import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';
import './App.css';
import Home from "../../pages/home/Home";
import Products from "../../pages/products/Products";

class App extends React.Component {
    render() {
        return (
              <Router>
                  <div>
                      <Switch>
                          <Route exact path="/" component={Home} />
                          <Route path="/products" component={Products} />
                          <Route component={Home} />
                      </Switch>
                  </div>
              </Router>
        );
    }
}

export default App
