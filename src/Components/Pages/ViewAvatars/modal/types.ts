import {TRequestState} from "../../../../context/store";
import {SerializedError} from "@reduxjs/toolkit";

export type TAvatarsTypes = "Nardoragon" | "Rexouium" |"Kitavali" | "Sergal" | "Canine" |"Other"
export type TAvatar = {
    id: string,
    discord: string,
    type: TAvatarsTypes,
    status: string,
    isQuest: boolean,
    url: string,
    work: string
}

export type TCost = {
    currency: string
    quest: number
    add: number
    restore: number
}

export type TAvatarState = {
    current: {
        state: TRequestState
        avatar?: TAvatar,
        error: SerializedError[]
    }
    post: {
        state: TRequestState,
        avatar?: TAvatar,
        error: SerializedError[]
    },
    cost: {
        state: TRequestState,
        data?: TCost
        error: SerializedError[]
    }
}