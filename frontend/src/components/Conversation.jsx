import { useSocketContext } from '../context/SocketContext';
import useConversation from './../store/useConversation';
const Conversation = ({ conversation, lastIndex }) => {
  const { selectedConversation, setSelectedConversation } = useConversation();

  const isSelected = selectedConversation?._id === conversation._id;

  const { onlineUsers } = useSocketContext();
  const isOnline = onlineUsers.includes(conversation._id);

  return (
    <section>
      <div
        className={`flex gap-2 items-center hover:bg-sky-500 rounded px-2 py-1 cursor-pointer
      ${isSelected ? 'bg-sky-500' : 'bg-slate-800'}
      `}
        onClick={() => setSelectedConversation(conversation)}
      >
        <div className={`avatar ${isOnline && 'online'} `}>
          <div className='w-12 rounded-full'>
            <img src={conversation.profilePic} alt={conversation.username} />
          </div>
        </div>

        <div className='flex flex-col flex-1'>
          <div className='flex items-center gap-3 justify-between'>
            <p className='font-bold text-gray-200'>{conversation.username}</p>
          </div>
        </div>
      </div>

      {!lastIndex && (
        <div className='divider my-2 py-0 h-[0.2px] bg-gray-300'></div>
      )}
    </section>
  );
};

export default Conversation;
