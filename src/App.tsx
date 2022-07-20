import React from 'react';
import ViewStart from "./Components/Pages/ViewStart";
import {Route, Redirect, Switch} from "react-router-dom";
import ViewWord from "./Components/Pages/ViewWorlds";
import ViewAssets from "./Components/Pages/ViewAssets";
import ViewQuest from "./Components/Pages/ViewQuest";
import {ViewVrchatApi} from "./Components/Pages/ViewVrchatApi";

function App() {
    return (
        <div>
            <Switch>
                <Route path={'/worlds'} component={ViewWord}/>
                <Route path={'/assets'} component={ViewAssets}/>
                <Route path={'/quest'} component={ViewQuest}/>
                <Route path={'/vrcat'} component={ViewVrchatApi}/>
                <Route path='/' exact={true} component={ViewStart} />
                <Redirect to={'/'}/>
            </Switch>

        </div>
    );
}

export default App;
