import { Button } from "../ui/button";
import { Trash2 } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { ITask } from "@/types/types";
import { useAppDispatch } from "@/redux/hooks";
import { deleteTask, toggleComplete } from "@/redux/features/task/taskSlice";
import { cn } from "@/lib/utils";

interface IProps {
    todo: ITask;
}

const TaskCard = ({ todo }: IProps) => {
    const dispatch = useAppDispatch();
    const { title, description, dueDate, isComplete, priority, id, assignto } = todo;

    // Format the due date to a localized string
    const formattedDueDate = new Date(dueDate).toLocaleDateString();

    return (
        <div className="border px-5 py-3 rounded-md">
            <div className="flex justify-between items-center">
                <div className="flex gap-2 items-center">
                    {/* Priority Indicator */}
                    <div>
                        {isComplete ? (
                            <div>
                                {priority === "High" && <div className="w-3 h-3 rounded-full bg-teal-500"></div>}
                            </div>
                        ) : (
                            <div>
                                {priority === "High" && <div className="w-3 h-3 rounded-full bg-red-500"></div>}
                                {priority === "Medium" && <div className="w-3 h-3 rounded-full bg-yellow-500"></div>}
                                {priority === "Low" && <div className="w-3 h-3 rounded-full bg-green-500"></div>}
                            </div>
                        )}
                    </div>

                    {/* Task Title */}
                    <h1 className={cn(isComplete && "line-through")}>{title}</h1>
                </div>

                <div className="flex gap-3 items-center">
                    {/* Delete Button */}
                    <Button onClick={() => dispatch(deleteTask(id))} variant="link" className="p-0 text-red-500">
                        <Trash2 />
                    </Button>

                    {/* Complete Checkbox */}
                    <Checkbox
                        onCheckedChange={() => dispatch(toggleComplete(id))}
                        checked={isComplete}
                    />
                </div>
            </div>

            {/* Task Details */}
            <p className="mt-5">
                Assign To - {assignto ? <span>{assignto}</span> : <span>N/A</span>}
            </p>
            <p className="mt-5">{description}</p>
            <p className="mt-5">{formattedDueDate}</p>
        </div>
    );
};

export default TaskCard;
