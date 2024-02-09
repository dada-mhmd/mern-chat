import { useAuthContext } from '../context/AuthContext';
import useConversation from '../store/useConversation';
import { extractTime } from '../utils/mongoDbTimeConvert';

const Message = ({ message }) => {
  const { authUser } = useAuthContext();
  const { selectedConversation } = useConversation();
  const fromMe = message?.senderId === authUser?._id;
  const formatedTime = extractTime(message.createdAt);
  const chatClassname = fromMe ? 'chat-end' : 'chat-start';
  const profilePic = fromMe
    ? authUser.profilePic
    : selectedConversation?.profilePic;

  const bubbleBgcolor = fromMe ? 'bg-blue-500' : '';

  return (
    <div className={`chat ${chatClassname} `}>
      <div className='chat-image avatar'>
        <div className='w-10 rounded-full'>
          <img src={profilePic} alt='user avatar' />
        </div>
      </div>

      <div
        className={`chat-bubble text-white bg-blue-500 ${bubbleBgcolor} pb-2`}
      >
        {message?.message}
      </div>
      <p className='chat-footer text-gray-200 opacity-50 text-xs flex gap-1 items-center'>
        {formatedTime}
      </p>
    </div>
  );
};

export default Message;
