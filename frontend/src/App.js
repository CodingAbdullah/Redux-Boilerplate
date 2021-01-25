import { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../src/Redux/store/store';
import Form from '../src/Components/Form/form';

class App extends Component {

  render = () => {
    return (
      <Provider store={store}>
          <Router>
            <Switch>
              <Route exact path="/" component={Form} />
            </Switch>      
          </Router>
      </Provider>
    );
  }
}

export default App;
