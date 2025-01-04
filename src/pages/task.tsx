import React from 'react';
import { useAppSelector } from '@/redux/hooks';
import { selectFilter, selectTasks } from '@/redux/features/task/taskSlice';
import TaskCard from '@/components/TaskCard/TaskCard';
import AddTasks from '@/components/AddTask/AddTasks';
import { motion, AnimatePresence } from 'framer-motion';

const Task = () => {
    const tasks = useAppSelector(selectTasks);
    const filter = useAppSelector(selectFilter);
    console.log(filter);
    const cardVariants = {
        hidden: (index: number) => ({ opacity: 0, x: -50 * index }),
        visible: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: 50 },
    };

    return (
        <div className="mx-auto max-w-7xl px-5 mt-20">
            <div className="flex justify-between items-center">
                <h1>Task Page</h1>
                <AddTasks />
            </div>
            <div className="space-y-5 mt-5">
                <AnimatePresence>
                    {tasks.map((task, index) => (
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
        </div>
    );
};

export default Task;
