import { RootState } from "@/redux/store";
import { ITask } from "@/types/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';

interface InitialState {
    tasks: ITask[];
    filter: "all" | "High" | "Medium" | "Low";
}

const initialState: InitialState = {
    tasks: [],
    filter: "all",
};

const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTask: (state, action: PayloadAction<ITask>) => {
            const id = uuidv4();
            const taskData = {
                ...action.payload,
                id,
                isComplete: false,
            };

            state.tasks.push(taskData);
        },
        setFilter: (state, action: PayloadAction<"all" | "High" | "Medium" | "Low">) => {
            state.filter = action.payload;
        },
    },
});

export const selectFilter = (state: RootState) => state.todo.filter;
export const selectTasks = (state: RootState) => state.todo.tasks;

export const { addTask, setFilter } = todoSlice.actions;
export default todoSlice.reducer;
