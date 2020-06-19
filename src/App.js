import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Landing from './pages/landing/Landing';
import Ranking from './pages/ranking/ranking';
import Another from './another';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={Landing}/>
          <Route path="/ranking" component={Ranking}/>
          <Route path="/another" component={Another}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
