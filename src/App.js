import React from "react";
import Users from "./layouts/users";
import Login from "./layouts/login";
import Main from "./layouts/main";
import { Route, Switch } from "react-router-dom";
import NavBar from "./components/ui/navBar";
const App = () => {
    return (
        <div>
            <NavBar />
            <Switch>
                <Route path="/users/:userId?" component={Users} />
                <Route path="/main" component={Main} />
                <Route path="/login/:type?" component={Login} />
                <Route component={Login} />
            </Switch>
        </div>
    );
};
export default App;
