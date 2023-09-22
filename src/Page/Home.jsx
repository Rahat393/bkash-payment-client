import axios from 'axios' 
import img from '../../src/assets/hphn.png'

const Home = () => {
   
  const pay = async () => {
    try{
      const {data} = await axios.post('http://localhost:5000/api/bkash/payment/create',
        {amount: 50, orderID: 1}, {withCredentials: true}
      )
      window.location.href = data.bkashURL
      console.log(data);
    }catch(error) {
      console.log(error);
    }
     
  }

  return (
    <div>
      <h1 className='text-center text-3xl font-medium mt-5'>Checkout Page</h1>
      <div className="flex justify-center items-center h-screen   ">
     <div className='flex border border-gray-400 p-6 rounded-lg shadow-xl'>
     <img src={img} className='w-80' alt="" />
         <span>
         <h2 className='text-2xl font-semibold'>Havit H226D Wired Black <br /> Stereo Headphone</h2>
      <p className='w-60  mt-5'>Type - Regular
Connection Type - Wired
Microphone - No
Plug Type - Single Port
Cable Length - 4.9 ft</p>
<p className=' text-xl font-semibold'>Price : $50</p>
      <button onClick={pay} className="bg-blue-500 mt-5 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Pay bkash</button>
         </span>
     </div>
    </div>
    </div>
  );
};

export default Home;