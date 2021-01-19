import { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Form from '../src/Components/Form/form';

class App extends Component {

  render = () => {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Form} />
        </Switch>      
      </Router>
    );
  }
}

export default App;
