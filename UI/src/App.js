import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import Login from './components/Login/Login';
import View from './components/Login/View';

function App() {
  return (
    <Router>
      <div className="App">

        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand" href="/">Home</a>

          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <a class="nav-item nav-link active" href="/login">Login <span class="sr-only">(current)</span></a>
              <a class="nav-item nav-link" href="/view">View</a>
            </div>
          </div>
        </nav>

      </div>
      <Switch>
        <Route exact path='/login' component={Login} />
        <Route exact path='/view' component={View} />
      </Switch>
    </Router>

  );
}

export default App;
