import {configureStore} from '@reduxjs/toolkit'
import assetsSlice from "../Components/Pages/ViewAssets/modal/reducer/assetsSlice";
import {useDispatch} from "react-redux";
import avatarsSlice from "../Components/Pages/ViewAvatars/modal/reducers/avatarsSlice";

export const store = configureStore({
    reducer: {
        assets: assetsSlice,
        avatars: avatarsSlice
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})

export type TRequestState = 'idle' | 'pending' | 'succeeded' | 'failed'
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()