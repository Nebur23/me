const Separator = ({ title }) => {
  return (
    <span className='bg-accent/35 text-4xl text-center'>
      {/* <span className='h-px flex-1 bg-accent'>[</span> */}
        {title}
      {/* <span className='h-px flex-1 bg-accent'></span> */}
    </span>
  );
};

export default Separator;
