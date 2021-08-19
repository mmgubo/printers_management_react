import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./components/Home";
import { AddPrinter } from "./components/AddPrinter";
import { EditPrinter } from "./components/EditPrinter";
import { GlobalProvider } from "./context/GlobalState";

import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <div style={{ maxWidth: "30rem", margin: "4rem auto" }}>
      <GlobalProvider>
        <Router>
          <Switch>
            {/* <Route exact path="/" component={() => <Home users={users} setUsers={setUsers} />} /> */}
            <Route exact path="/" component={Home} />
            <Route path="/add" component={AddPrinter} />
            <Route path="/edit/:id" component={EditPrinter} />
          </Switch>
        </Router>
      </GlobalProvider>
    </div>
  );
};

export default App;
