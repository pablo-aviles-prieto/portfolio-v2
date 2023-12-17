export const LandingComponent = () => {
  return (
    <div className='h-full'>
      <div className='w-full border-b-2 border-b-muted-purple-1 h-[4rem] flex justify-between items-center px-[10rem]'>
        <p>Hola que tal loco!!</p>
        <div>Sección 1 | Sección 2 | Sección 3</div>
      </div>
      <div className='flex items-center justify-center h-[45rem] gap-x-8 text-4xl'>
        <p>Yo ma mang, this is some cool description, etc etc etc</p>
        <div>This is an image block</div>
        {/* <div className='w-[450px] relative'>
        <img
        src='/images/profile-pic-no-bground.webp'
        alt='Pablo Avilés Prieto'
        className='w-[350px] rounded-[50px] absolute bottom-[45px] left-[55px]'
        />
      </div> */}
      </div>
    </div>
  );
};
