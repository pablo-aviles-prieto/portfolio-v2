export const Header = () => {
  return (
    <div className='flex items-center justify-between pt-6'>
      <p className='text-3xl font-bold text-muted-shady-red-1'>Pablo Avilés</p>
      <div className='flex text-lg gap-x-10'>
        <p>About me</p>
        <p>Timeline</p>
        <p>Previous works</p>
        <p>Contact me</p>
      </div>
    </div>
  );
};
