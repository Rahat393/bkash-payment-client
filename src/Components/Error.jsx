import { VscError} from 'react-icons/vsc';


const Error = () => {
  const searchData = new URLSearchParams(window.location.search)
    const message = searchData.get('message')
    return (
        <div className="flex items-center justify-center    h-screen text-4xl">
          <VscError className='mr-2 mt-2   text-red-700'/>
          <h2>Payment {message}</h2>
          </div>
    )
};

export default Error;