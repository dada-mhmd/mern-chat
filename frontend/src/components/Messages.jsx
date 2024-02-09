import Message from './Message';
import useGetMsgs from './../hooks/useGetMsgs';
import MessageSkeleton from './MsgSekeleton';
import { useEffect, useRef } from 'react';

const Messages = () => {
  const { loading, messages } = useGetMsgs();
  const lastMessageRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  }, [messages]);

  return (
    <div className='px-4 flex-1 overflow-auto'>
      {!loading &&
        messages.length > 0 &&
        messages.map((message) => (
          <div key={message._id} ref={lastMessageRef}>
            <Message message={message} />
          </div>
        ))}

      {loading &&
        [...Array(3)].map((_, index) => <MessageSkeleton key={index} />)}

      {!loading && messages.length === 0 && (
        <p className='text-center text-gray-100'>Start a conversation</p>
      )}
    </div>
  );
};

export default Messages;
