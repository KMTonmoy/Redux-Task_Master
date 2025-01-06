export interface ITask {
    id: string;
    title: string;
    description: string;
    dueDate: string;
    isComplete: boolean;
    assignto: string | null;
    priority: "High" | "Medium" | "Low";

}
export interface IUser {
    id: string;
    name: string;

}
