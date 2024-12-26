import {REQUEST_SERVER} from "../../../../../Backend/types";
import {ActionReducerMapBuilder, createAsyncThunk} from "@reduxjs/toolkit";
import {RootState} from "../../../../../context/store";
import {TAvatar, TAvatarState} from "../types";
import axios from "axios";

type TPayload = {id: TAvatar["id"]}
export type Response = TAvatar

export const getAvatar = createAsyncThunk<Response,TPayload,{state:RootState}>(
    "getAvatar",
    async (
        {id},
        {dispatch, fulfillWithValue, rejectWithValue}
    ):Promise<Response> => {
        try {
            const response = await axios.get<{result: TAvatar }>(`${REQUEST_SERVER}vrcat/avatars/${id}`)
            return fulfillWithValue(response.data.result)
        } catch (e: any) {
            return rejectWithValue(e) as any
        }
    }
);

export const ext = (builder: ActionReducerMapBuilder<TAvatarState>) => {
    return builder
        .addCase(getAvatar.pending, (state, action) => {
            state.current.state = "pending"
        })
        .addCase(getAvatar.fulfilled, (state, action) => {
            state.current.avatar = action.payload
            state.current.state = "succeeded"
        })
        .addCase(getAvatar.rejected, (state, action) => {
            state.current.state = "failed"
        })
}