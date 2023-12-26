export const TimelineLegend = () => {
  return (
    <div className='flex items-center justify-center gap-x-8'>
      <div className='flex items-center gap-2 bg-'>
        <div className='w-6 h-6 bg-blue-800 border-2 border-black rounded-full' />
        <p>IT/Networking</p>
      </div>
      <div className='flex items-center gap-2'>
        <div className='w-6 h-6 border-2 border-black rounded-full bg-sky-800' />
        <p>Gaming</p>
      </div>
      <div className='flex items-center gap-2 bg-'>
        <div className='w-6 h-6 bg-indigo-800 border-2 border-black rounded-full' />
        <p>Developing</p>
      </div>
    </div>
  );
};
