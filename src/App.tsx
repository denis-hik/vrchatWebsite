import React from 'react';
import ViewStart from "./Components/Pages/ViewStart";
import {Route, Redirect} from "react-router-dom";
import ViewWord from "./Components/Pages/ViewWorlds";
import ViewAssets from "./Components/Pages/ViewAssets";

function App() {
  return (
    <div>
        <Route excat path={'/home'} component={ViewStart}/>
        <Route path={'/worlds'} component={ViewWord} />
        <Route path={'/assets'} component={ViewAssets} />
        <Redirect to={'/home'}/>
    </div>
  );
}

export default App;
