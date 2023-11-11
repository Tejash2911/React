import { createSlice } from '@reduxjs/toolkit'

const initialState = [];

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addUser: (state, action) => {
            state.push(action.payload)
        },
        updateUser: (state, action) => {
            console.log(action.payload)
            state.splice(action.payload.index, 1, action.payload.data)
        },
        deleteUser: (state, action) => {
            return state.filter((ele) => ele.id !== action.payload);
        }
    }
})

export const { addUser, updateUser, deleteUser } = userSlice.actions
export default userSlice.reducer