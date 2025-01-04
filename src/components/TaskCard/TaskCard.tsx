import React from "react";
import { Button } from "../ui/button";
import { Trash2 } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { ITask } from "@/types/types";

interface IProps {
    todo: ITask;
}

const TaskCard = ({ todo }: IProps) => {
    const { title, description, dueDate, isComplete, priority } = todo;

     const formattedDueDate = new Date(dueDate).toLocaleDateString();

    return (
        <div className="border px-5 py-3 rounded-md">
            <div className="flex justify-between items-center">
                <div className="flex gap-2 items-center">
                    <div>
                        {priority === "High" && <div className="size-3 rounded-full bg-red-500"></div>}
                        {priority === "Medium" && <div className="size-3 rounded-full bg-yellow-500"></div>}
                        {priority === "Low" && <div className="size-3 rounded-full bg-green-500"></div>}
                    </div>
                    <h1>{title}</h1>
                </div>
                <div className="flex gap-3 items-center">
                    <Button variant="link" className="p-0 text-red-500">
                        <Trash2 />
                    </Button>
                    <Checkbox checked={isComplete} />
                </div>
            </div>
            <p className="mt-5">{description}</p>
            <p className="mt-5">{formattedDueDate}</p>
        </div>
    );
};

export default TaskCard;
