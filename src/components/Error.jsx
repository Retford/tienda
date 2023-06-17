const Error = ({ texto }) => {
  return (
    <div className='bg-red-400 p-3 rounded-lg text-white text-center font-bold'>
      <p>{texto}</p>
    </div>
  );
};

export default Error;
