import React, { useState } from "react";
import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import { selectUsers, addUser } from "@/redux/user/userSlice";
import { motion, AnimatePresence } from "framer-motion";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import UserCard from "@/components/UserCard/UserCard";

const Users = () => {
    const dispatch = useAppDispatch();
    const users = useAppSelector(selectUsers);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [newUserName, setNewUserName] = useState("");

    const handleAddUser = () => {
        if (newUserName.trim()) {
            const newUser = {
                id: users.length + 1,
                name: newUserName.trim(),
            };
            dispatch(addUser(newUser));
            setNewUserName("");
            setIsModalOpen(false);
        }
    };

    const cardVariants = {
        hidden: (index: number) => ({ opacity: 0, x: -50 * index }),
        visible: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: 50 },
    };

    return (
        <div className="mx-auto max-w-7xl px-5 mt-20">
            <div className="flex justify-between items-center gap-5">
                <h1 className="font-bold italic text-2xl">Users Page</h1>
                <div className="flex space-x-3">
                    <Button onClick={() => setIsModalOpen(true)}>Add User</Button>
                </div>
            </div>

            <div className="  grid grid-cols-3 gap-3 items-center mt-5">
                <AnimatePresence>
                    {users.map((user, index) => (
                        <motion.div
                            key={user.id}
                            custom={index + 1}
                            variants={cardVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"

                            transition={{ duration: 0.4, delay: index * 0.2 }}
                        >
                            <UserCard user={user} />
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>

            {users.length === 0 && (
                <div className="text-center text-gray-500 mt-10">
                    <p>No users found.</p>
                </div>
            )}

            <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Add a New User</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-5">
                        <Input
                            placeholder="Enter user name"
                            value={newUserName}
                            onChange={(e) => setNewUserName(e.target.value)}
                        />
                    </div>
                    <DialogFooter className="mt-5">
                        <Button variant="outline" onClick={() => setIsModalOpen(false)}>
                            Cancel
                        </Button>
                        <Button onClick={handleAddUser}>Add User</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default Users;
