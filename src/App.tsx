import React, {useEffect, useState} from 'react';
import ViewStart from "./Components/Pages/ViewStart";
import {Route, Redirect, Switch} from "react-router-dom";
import ViewWord from "./Components/Pages/ViewWorlds";
import ViewAssets from "./Components/Pages/ViewAssets";
import ViewQuest from "./Components/Pages/ViewQuest";
import {ViewVrchatApi} from "./Components/Pages/ViewVrchatApi";
import {getAssetsAction} from "./Components/Pages/ViewAssets/modal/getAssetsAction";
import ViewStack from "./Components/Pages/ViewStack";
import {getAssetsGumroadAction} from "./Components/Pages/ViewAssets/modal/getAssetsGumroadAction";
import {dataAssetType} from "./Backend/types";
import ViewAvatars from "./Components/Pages/ViewAvatars";

function App() {
    const [dataAssets, setDataAssets] = useState<dataAssetType[]>([]);
    const [statusAssets, setStatusAssets] = useState("loading");

    useEffect(() => {
        getAssetsAction({
            successCallback: data1 => {
                setDataAssets(data1);
                getAssetsGumroadAction({
                   successCallback: (data1) => {
                       setDataAssets(prevState => [...prevState, ...data1]);
                       setStatusAssets("success");
                   }  ,
                    errorCallback: () => {

                        setStatusAssets("success");
                    }
                });
            },
            errorCallback: () => {
                setDataAssets([]);
                setStatusAssets("error");
            },
        })
    }, []);

    return (
        <div>
            <Switch>
                <Route path={'/worlds'} component={ViewWord}/>
                <Route path={'/assets'} ><ViewAssets status={statusAssets} data={dataAssets} /></Route>
                <Route path={'/quest'} component={ViewQuest}/>
                <Route path={'/vrcat'} component={ViewVrchatApi}/>
                <Route path={'/avatars'} component={ViewAvatars}/>
                <Route path={'/stack'} component={ViewStack}/>
                <Route path='/' exact={true} component={ViewStart} />
                <Redirect to={'/'}/>
            </Switch>

        </div>
    );
}

export default App;
