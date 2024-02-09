import { useState } from 'react';
import { BsSend } from 'react-icons/bs';
import useSendMsg from '../hooks/useSendMsg';

const MessageInput = () => {
  const [message, setMessage] = useState('');

  const { loading, sendMsg } = useSendMsg();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message) return;
    await sendMsg(message);
    setMessage('');
  };

  return (
    <form onSubmit={handleSubmit} className=' px-4 my-3'>
      <div className='w-full relative'>
        <input
          type='text'
          className='border text-sm rounded-lg block w-full outline-none p-2.5 bg-gray-700 border-gray-600 text-white'
          placeholder='Send a message'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          type='submit'
          disabled={loading}
          className='absolute inset-y-0 end-0 flex items-center pe-3'
        >
          {loading ? (
            <div className='loading loading-spinner'></div>
          ) : (
            <BsSend className='text-sky-600 font-bold text-lg' />
          )}
        </button>
      </div>
    </form>
  );
};

export default MessageInput;
