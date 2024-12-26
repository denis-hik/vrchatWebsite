import React, {useEffect} from "react";
import {RootState, useAppDispatch} from "../../../../context/store";
import {useSelector} from "react-redux";
import {getAssets} from "./actions/getAssets";

const stateSelector = (root: RootState) => root.assets.state

export const assetsPageContext = React.createContext<{}>({});
export const AssetsPageContextProvider: React.FC<{ children: any }> = ({children}) => {
    const dispatch = useAppDispatch()

    const state = useSelector(stateSelector)

    useEffect(() => {
        if (state == "idle")
            dispatch(getAssets())
    }, [state]);

    return (
        <assetsPageContext.Provider value={{}}>
            {children}
        </assetsPageContext.Provider>
    );
}
