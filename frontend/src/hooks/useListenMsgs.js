import { useEffect } from 'react';
import { useSocketContext } from './../context/SocketContext';
import useConversation from './../store/useConversation';

import ring from '../assets/ring.mp3';

const useListenMsgs = () => {
  const { socket } = useSocketContext();
  const { messages, setMessages } = useConversation();

  useEffect(() => {
    socket?.on('newMessage', (newMessage) => {
      const sound = new Audio(ring);
      sound.play();
      setMessages([...messages, newMessage]);
    });
    return () => socket?.off('newMessage');
  }, [socket, messages, setMessages]);
};

export default useListenMsgs;
