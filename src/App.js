import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter as Router , Route , Link} from 'react-router-dom'
import Todolist from './component/todo-list.component'
import CreateTodo from './component/create-list.component'
import EditTodo from './component/edit-list.component'

function App() {
  return (
    <Router>
      <div className="container">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <Link to="/" className="navbar-brand">Dlab</Link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/create" className="nav-link">CreateTodo</Link>
              </li>
            </ul>
          </div>
     </div>
      </nav>
      </div>

    <div className="container">
        <Route path="/" exact component={Todolist} />
        <Route path="/create" component={CreateTodo} />
        <Route path="/update/:id" component={EditTodo} />
    </div>
    </Router>
  );
}

export default App;
