import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from 'react';

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Form, FormControl, FormField, FormItem, FormLabel } from '../ui/form';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";

const AddTasks = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [date, setDate] = useState(null);
    const form = useForm();

    const onsubmit = (data) => {
        console.log(data);
        toast.success("Task Added Successfully");
        setIsModalOpen(false);
    };

    return (
        <div>
            <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
                <DialogTrigger asChild>
                    <Button variant="outline" onClick={() => setIsModalOpen(true)}>
                        Add Task
                    </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Add Task Using Task Master</DialogTitle>
                        <DialogDescription>
                            Make changes to your Daily Life Style Using Task Master
                        </DialogDescription>
                    </DialogHeader>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onsubmit)} className="space-y-5">
                            <FormField
                                control={form.control}
                                name="title"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Task Title</FormLabel>
                                        <FormControl>
                                            <Input {...field} placeholder="Task Title" value={field.value || ""} />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="priority"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Task Priority</FormLabel>
                                        <FormControl>
                                            <Select
                                                onValueChange={(value) => field.onChange(value)}
                                                defaultValue={field.value}
                                            >
                                                <SelectTrigger className="w-full">
                                                    <SelectValue placeholder="Select Task Priority" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectGroup>
                                                        <SelectLabel>Priorities</SelectLabel>
                                                        <SelectItem value="High">High</SelectItem>
                                                        <SelectItem value="Medium">Medium</SelectItem>
                                                        <SelectItem value="Low">Low</SelectItem>
                                                    </SelectGroup>
                                                </SelectContent>
                                            </Select>
                                        </FormControl>
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="description"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Task Description</FormLabel>
                                        <FormControl>
                                            <Textarea {...field} placeholder="Task Description" value={field.value || ""} />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="dueDate"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Task Due Date</FormLabel>
                                        <FormControl>
                                            <Popover>
                                                <PopoverTrigger asChild>
                                                    <Button
                                                        variant="outline"
                                                        className="w-full justify-start text-left font-normal"
                                                    >
                                                        <CalendarIcon />
                                                        {date ? format(date, "PPP") : <span>Pick a date</span>}
                                                    </Button>
                                                </PopoverTrigger>
                                                <PopoverContent className="w-auto p-0" align="start">
                                                    <Calendar
                                                        mode="single"
                                                        selected={date}
                                                        onSelect={(selectedDate) => {
                                                            setDate(selectedDate);
                                                            field.onChange(selectedDate);
                                                        }}
                                                        initialFocus
                                                    />
                                                </PopoverContent>
                                            </Popover>
                                        </FormControl>
                                    </FormItem>
                                )}
                            />

                            <DialogFooter className="mt-5">
                                <Button type="submit">
                                    Save Task
                                </Button>
                            </DialogFooter>
                        </form>
                    </Form>
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default AddTasks;
