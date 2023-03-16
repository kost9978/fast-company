import React from "react";
import Users from "./layouts/users";
import Login from "./layouts/login";
import Main from "./layouts/main";
import { Route, Switch } from "react-router-dom";
import NavBar from "./components/navBar";
const App = () => {
    return (
        <div>
            <NavBar />
            <Switch>
                <Route path="/users/:userId?" component={Users} />
                <Route path="/main" component={Main} />
                <Route path="/login" component={Login} />
                <Route component={Users} />
            </Switch>
        </div>
    );
};
export default App;
