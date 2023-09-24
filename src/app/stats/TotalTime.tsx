'use client';

import WeekOverview from '@/app/stats/WeekOverview';
import useTimerContext from '@/hooks/useTimerContext';
import Loading from '../loading';

const TotalTime = () => {
  const { totalTime, error, isLoading } = useTimerContext();

  if (isLoading) return <Loading />;

  if (error) return <p className='text-red-500'>{error}</p>;

  return (
    <div className='flex flex-col items-center gap-2 w-full'>
      <p>Total Time: {totalTime} minutes</p>
      <WeekOverview />
    </div>
  );
};

export default TotalTime;
