import React, { useState } from "react";
import { useDispatch } from "react-redux";
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
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { Form, FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import { Input } from "../ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { addUser } from "@/redux/features/user/userSlice";

const AddUser = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [registrationDate, setRegistrationDate] = useState<Date | null>(null);
    const form = useForm();
    const dispatch = useDispatch();

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        const newUser = { ...data, registrationDate };
        dispatch(addUser(newUser));
        toast.success("User Added Successfully");
        setIsModalOpen(false);
        form.reset();
        setRegistrationDate(null);
    };

    return (
        <div>
            <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
                <DialogTrigger asChild>
                    <Button variant="outline" onClick={() => setIsModalOpen(true)}>
                        Add User
                    </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Add New User</DialogTitle>
                        <DialogDescription>
                            Enter details to register a new user in the system.
                        </DialogDescription>
                    </DialogHeader>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                            {/* User Name */}
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Full Name</FormLabel>
                                        <FormControl>
                                            <Input required {...field} placeholder="Full Name" value={field.value || ""} />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />

                            {/* User Email */}
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Email</FormLabel>
                                        <FormControl>
                                            <Input required {...field} placeholder="Email" value={field.value || ""} />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />

                            {/* User Role */}
                            <FormField
                                control={form.control}
                                name="role"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Role</FormLabel>
                                        <FormControl>
                                            <Input required {...field} placeholder="e.g., Admin, User" value={field.value || ""} />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />

                            {/* Registration Date */}
                            <FormField
                                control={form.control}
                                name="registrationDate"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Registration Date</FormLabel>
                                        <FormControl>
                                            <Popover>
                                                <PopoverTrigger asChild>
                                                    <Button
                                                        variant="outline"
                                                        className="w-full justify-start text-left font-normal"
                                                    >
                                                        <CalendarIcon />
                                                        {registrationDate ? format(registrationDate, "PPP") : <span>Pick a date</span>}
                                                    </Button>
                                                </PopoverTrigger>
                                                <PopoverContent className="w-auto p-0" align="start">
                                                    <Calendar
                                                        required
                                                        mode="single"
                                                        onSelect={(selectedDate) => {
                                                            setRegistrationDate(selectedDate);
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
                                <Button type="submit">Save User</Button>
                            </DialogFooter>
                        </form>
                    </Form>
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default AddUser;
