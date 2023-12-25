export const TimelineLegend = () => {
  return (
    <div className='flex items-center justify-center gap-x-8'>
      <div className='flex items-center gap-2'>
        <div className='w-3 h-3 bg-yellow-600' />
        <p>IT/Network</p>
      </div>
      <div className='flex items-center gap-2'>
        <div className='w-3 h-3 bg-blue-500' />
        <p>Gamer</p>
      </div>
      <div className='flex items-center gap-2'>
        <div className='w-3 h-3 bg-purple-600' />
        <p>Developer</p>
      </div>
    </div>
  );
};
