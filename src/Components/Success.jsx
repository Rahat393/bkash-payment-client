import { BsFillCheckCircleFill} from 'react-icons/bs';

const Success = () => {
  return (
    <div className="flex items-center justify-center text-green-600 h-screen text-4xl font-semibold">
      <BsFillCheckCircleFill className='mr-2 mt-2'/>
      <h2>Payment Successful !</h2>
    </div>
  );
};

export default Success;