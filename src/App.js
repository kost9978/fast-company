import React from "react";
import Users from "./layouts/users";
import Login from "./layouts/login";
import Main from "./layouts/main";
import { ToastContainer } from "react-toastify";
// import UserPageEdit from "./components/page/userPageEdit/userPageEdit";
import { Route, Switch } from "react-router-dom";
import NavBar from "./components/ui/navBar";
import { ProfessionProvider } from "./hooks/useProfessions";
import { QualitiesProvider } from "./hooks/useQualities";
const App = () => {
    return (
        <div>
            <NavBar />
            <QualitiesProvider>
                <ProfessionProvider>
                    <Switch>
                        {/* <Route path="/users/:userId?/edit" component={UserPageEdit} />
                <Route path="/users/:userId?" component={Users} /> */}
                        <Route path="/users/:userId?/:edit?" component={Users} />
                        <Route path="/main" component={Main} />
                        <Route path="/login/:type?" component={Login} />
                        <Route component={Login} />
                    </Switch>
                </ProfessionProvider>
            </QualitiesProvider>

            <ToastContainer/>
        </div>
    );
};
export default App;
