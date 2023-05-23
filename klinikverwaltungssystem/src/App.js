
import Menu from './Menu/Menu';
import Home from './Home/Home';
import AddPatient from './Add/AddPatient';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AddTermin from './Add/AddTermin';
import ListPatient from './List/ListPatient';
import ListTermin from './List/ListTermin';

function App() {
  return (
    <Router>
      <div className="App">
        <Menu />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/home">
              <Home />
            </Route>
            <Route exact path="/patienteHinzufuegen">
              < AddPatient />
            </Route>
            <Route exact path="/patienteListen">
              < ListPatient />
            </Route>
            <Route exact path="/termineErstellen">
              < AddTermin />
            </Route>
            <Route exact path="/termineListen">
              < ListTermin />
            </Route>

          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
