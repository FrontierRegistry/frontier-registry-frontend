import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        connectionState: {
            publicKey: undefined,
        }
    },
    reducers: {
        setPublicKey(state, action): void {
            state.connectionState.publicKey = action.payload.publicKey
        }
    }
});
export const { setPublicKey } = userSlice.actions;
export default userSlice.reducer;