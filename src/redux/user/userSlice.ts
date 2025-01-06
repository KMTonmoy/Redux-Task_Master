import { createSlice, PayloadAction, nanoid } from '@reduxjs/toolkit';
import { RootState } from '@/redux/store';
import { IUser } from '@/types/types';

interface InitialState {
    users: IUser[];
}

const initialState: InitialState = {
    users: [],
};

type DraftUser = Pick<IUser, 'name'>;

const createUser = (userData: DraftUser): IUser => ({
    id: nanoid(),
    ...userData,
});

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addUser: (state, action: PayloadAction<DraftUser>) => {
            const user = createUser(action.payload);
            state.users.push(user);
        },
        removeUser: (state, action: PayloadAction<number>) => {
            state.users = state.users.filter((user) => user.id !== action.payload);
        },
 
    },
});

export const { addUser, removeUser } = userSlice.actions;
export const selectUsers = (state: RootState) => state.user.users;
export default userSlice.reducer;
