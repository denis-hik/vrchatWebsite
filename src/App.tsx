import React from 'react';
import ViewStart from "./Components/ViewStart/ViewStart";
import {Route} from "react-router-dom";

function App() {
  return (
    <div>
        <Route path={'/'} component={ViewStart}/>
    </div>
  );
}

export default App;
