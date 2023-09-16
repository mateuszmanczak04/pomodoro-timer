'use client';

import useTasksContext from '@/hooks/useTasksContext';
import { FormEvent, useState } from 'react';
import { Button } from '../(common)/Button';

export const AddTaskForm = () => {
  const { addTask } = useTasksContext();

  const [title, setTitle] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!title) return;
    addTask({ title });
    setTitle('');
  };

  return (
    <form
      className='flex flex-col gap-2 items-center w-full p-2 rounded-xl '
      onSubmit={handleSubmit}>
      <h2 className='text-3xl font-bold'>Add Task</h2>
      <input
        type='text'
        className='input-text'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Button className='w-full'>Add</Button>
    </form>
  );
};
