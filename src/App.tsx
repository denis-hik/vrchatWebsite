import React, {useEffect} from 'react';
import ViewStart from "./Components/Pages/ViewStart";
import {Redirect, Route, Switch} from "react-router-dom";
import ViewWord from "./Components/Pages/ViewWorlds";
import ViewAssets from "./Components/Pages/ViewAssets";
import ViewStack from "./Components/Pages/ViewStack";
import ViewAvatars from "./Components/Pages/ViewAvatars";
import {AppBody} from "./styled";
import ViewFurCity from "./Components/Pages/ViewFurCity";

function App() {

    function handleContextMenu(e) {
        e.preventDefault(); // prevents the default right-click menu from appearing
    }

    useEffect(() => {
        window.addEventListener('contextmenu', handleContextMenu);
        return () => window.removeEventListener('contextmenu', handleContextMenu);
    });

    return (
        <AppBody>
            <Switch>
                <Route path={'/worlds'} component={ViewWord}/>
                <Route path={'/assets'} ><ViewAssets /></Route>
                <Route path={'/avatars'} ><ViewAvatars /></Route>
                <Route path={'/stack'} component={ViewStack}/>
                <Route path={'/furCity'} component={ViewFurCity}/>
                <Route path='/' exact={true} component={ViewStart} />
                <Redirect to={'/'}/>
            </Switch>

        </AppBody>
    );
}

export default App;
