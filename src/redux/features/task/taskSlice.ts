import { RootState } from "@/redux/store";
import { ITask } from "@/types/types";
import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
    tasks: [ITask];
    filter: "all" | "high" | "medium" | "low";
}



const initialState: InitialState = {
    tasks: [
        {
            id: 1,
            title: "Task 1",
            description: "This is a task description",
            dueDate: '2025-11',
            isComplete: true,
            priority: "High",
        },
        {
            id: 2,
            title: "Task 2",
            description: "This is a task description",
            dueDate: '2025-11',
            isComplete: false,
            priority: "Medium",
        },
        {
            id: 3,
            title: "Task 3",
            description: "This is a task description",
            dueDate: '2025-11',
            isComplete: false,
            priority: "Low",
        },

    ],
    filter: "all"
}
const todoSlice = createSlice({
    name: "task",
    initialState,
    reducers: {

    },
})

export const selectFilter = (state: RootState) => state.todo.filter;
export const selectTasks = (state: RootState) => state.todo.tasks;

export default todoSlice.reducer;    