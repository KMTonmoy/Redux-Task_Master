import React from 'react';
import { useAppSelector, useAppDispatch } from '@/redux/hooks';
import { selectFilter, selectTasks, setFilter } from '@/redux/features/task/taskSlice';
import TaskCard from '@/components/TaskCard/TaskCard';
import AddTasks from '@/components/AddTask/AddTasks';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Tabs,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs";

const Task = () => {
    const dispatch = useAppDispatch();
    const tasks = useAppSelector(selectTasks);
    const filter = useAppSelector(selectFilter);

    const filteredTasks = filter === 'all' ? tasks : tasks.filter((task) => task.priority === filter);

    const cardVariants = {
        hidden: (index: number) => ({ opacity: 0, x: -50 * index }),
        visible: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: 50 },
    };

    return (
        <div className="mx-auto max-w-7xl px-5 mt-20">
            <div className="flex justify-between md:justify-end gap-5 items-center">
                <h1 className='md:block hidden mr-auto font-bold italic text-2xl'>Task Page</h1>

                <Tabs defaultValue="all" onValueChange={(value) => dispatch(setFilter(value as "all" | "High" | "Medium" | "Low"))}>
                    <TabsList className="grid w-full grid-cols-4">
                        <TabsTrigger value="all">All</TabsTrigger>
                        <TabsTrigger value="High">High</TabsTrigger>
                        <TabsTrigger value="Medium">Medium</TabsTrigger>
                        <TabsTrigger value="Low">Low</TabsTrigger>
                    </TabsList>
                </Tabs>
                <AddTasks />
            </div>
            <div className="space-y-5 mt-5">
                <AnimatePresence>
                    {filteredTasks.map((task, index) => (
                        <motion.div
                            key={task.id}
                            custom={index + 1}
                            variants={cardVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            transition={{ duration: 0.4, delay: index * 0.2 }}
                        >
                            <TaskCard todo={task} />
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>
        </div >
    );
};
  
export default Task;
