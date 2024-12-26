import {REQUEST_SERVER} from "../../../../../Backend/types";
import {ActionReducerMapBuilder, createAsyncThunk} from "@reduxjs/toolkit";
import {RootState} from "../../../../../context/store";
import {TAvatar, TAvatarState, TAvatarsTypes} from "../types";
import axios from "axios";

type TPayload = {
    discord: TAvatar["discord"]
    type: TAvatarsTypes,
    url: TAvatar["url"],
    work: number,
}
export type Response = TAvatar

export const postAvatar = createAsyncThunk<Response,TPayload,{state:RootState}>(
    "postAvatar",
    async (
        avatar,
        {dispatch, fulfillWithValue, rejectWithValue}
    ):Promise<Response> => {
        try {
            const response = await axios.post<{result: TAvatar }>(`${REQUEST_SERVER}vrcat/avatars`, avatar)
            return fulfillWithValue(response.data.result)
        } catch (e: any) {
            return rejectWithValue(e) as any
        }
    }
);

export const ext = (builder: ActionReducerMapBuilder<TAvatarState>) => {
    return builder
        .addCase(postAvatar.pending, (state, action) => {
            state.post.state = "pending"
            state.post.error = []
        })
        .addCase(postAvatar.fulfilled, (state, action) => {
            state.post.state = "succeeded"
            state.post.avatar = action.payload
        })
        .addCase(postAvatar.rejected, (state, action) => {
            state.post.state = "failed"
            state.post.error = [action.error]
        })
}