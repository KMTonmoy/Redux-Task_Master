// src/components/Task.tsx
import React from 'react';
import { useAppSelector } from '@/redux/hooks';
import { selectFilter, selectTasks } from '@/redux/features/task/taskSlice';
import TaskCard from '@/components/TaskCard/TaskCard';
const Task = () => {
    const tasks = useAppSelector(selectTasks);
    const filter = useAppSelector(selectFilter);
    console.log(tasks);
    console.log(filter);
    return (
        <div className='mx-auto max-w-7xl px-5 mt-20'>
            <div>

                <h1>Task Page</h1>
            </div>
            <div className='space-y-5 mt-5'>
            {
                tasks.map((task) => {
                    return <TaskCard key={task.id} todo={task} />
                })
            }
              
            </div>

        </div>
    );
};

export default Task;
