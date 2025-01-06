import { RootState } from "@/redux/store";
import { ITask } from "@/types/types";
import { createSlice, PayloadAction, nanoid } from "@reduxjs/toolkit";

interface InitialState {
    tasks: ITask[];
    filter: "all" | "High" | "Medium" | "Low";
}

const initialState: InitialState = {
    tasks: [],
    filter: "all",
};

type DraftTask = Pick<ITask, "title" | "description" | "dueDate" | "priority" | "assignto">;

const createTask = (taskData: DraftTask): ITask => {
    return {
        id: nanoid(),
        isComplete: false,
        assignto: taskData.assignto || null,
        ...taskData,
    };
};

const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTask: (state, action: PayloadAction<DraftTask>) => {
            const taskData = createTask(action.payload);
            state.tasks.push(taskData);
        },
        setFilter: (state, action: PayloadAction<"all" | "High" | "Medium" | "Low">) => {
            state.filter = action.payload;
        },
        toggleComplete: (state, action: PayloadAction<string>) => {
            const task = state.tasks.find((task) => task.id === action.payload);
            if (task) {
                task.isComplete = !task.isComplete;
            }
        },
        deleteTask: (state, action: PayloadAction<string>) => {
            state.tasks = state.tasks.filter((task) => task.id !== action.payload);
        },
    },
});

export const selectFilter = (state: RootState) => state.todo.filter;
export const selectTasks = (state: RootState) => state.todo.tasks;

export const { addTask, setFilter, toggleComplete, deleteTask } = todoSlice.actions;
export default todoSlice.reducer;
