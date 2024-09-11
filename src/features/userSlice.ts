import { createSlice } from "@reduxjs/toolkit";

import { UserPublicKey } from '../constants/actions'

interface UserPublicKeyAction {
    type: typeof UserPublicKey
    publicKey: string
}

export const userPublicKey = (publicKey: string): UserPublicKeyAction => ({
    type: UserPublicKey,
    publicKey,
})

export const userSlice = createSlice({
    name: "user",
    initialState: {
        connectionState: {
            publicKey: undefined,
        }
    },
    reducers: {
        setPublicKey(state, action): void {
            console.log(action)
            state.connectionState.publicKey = action.payload.publicKey
        }
    }
});
export const { setPublicKey } = userSlice.actions;
export default userSlice.reducer;