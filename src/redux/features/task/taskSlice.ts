import { ITask } from "@/types/types";
import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
    task: [ITask];
}



const initialState: InitialState = {
    task: [
        {
            id: 1,
            title: "Task 1",
            description: "This is a task description",
            dueDate: '2025-11',
            isComplete: false,
            priority: "High",
        },
    ]
}
const todoSlice = createSlice({
    name: "task",
    initialState,
    reducers: {

    },
})


export default todoSlice.reducer;    