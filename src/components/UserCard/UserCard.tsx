import { useAppDispatch } from "@/redux/hooks";
import { removeUser } from "@/redux/user/userSlice";
import { IUser } from "@/types/types";
import { Trash2 } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";  // Adjusted import for consistency with other UI components.

interface IProps {
    user: IUser;
}

const UserCard = ({ user }: IProps) => {
    const dispatch = useAppDispatch();

    const handleDeleteUser = () => {
        dispatch(removeUser(user.id)); // Correctly using user.id here
    };

    return (
        <div className="border border-purple-500 px-5 pt-2 pb-20 rounded-md">
            <div className="flex justify-between items-center">
                <div className="flex gap-2 items-center">
                    <h1>{user.name}</h1>
                </div>
                <div className="flex gap-3 items-center">
                    <Button
                        onClick={handleDeleteUser} // Call the handleDeleteUser function
                        variant="link"
                        className="p-0 text-red-500"
                    >
                        <Trash2 />
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default UserCard;
