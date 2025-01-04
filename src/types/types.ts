export interface ITask {
    id: number;
    title: string;
    description: string;
    dueDate: string;
    isComplete: boolean;
    priority: "High" | "Medium" | "Low";
}