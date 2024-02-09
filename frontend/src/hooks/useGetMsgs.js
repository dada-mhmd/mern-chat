import { useEffect, useState } from 'react';
import useConversation from '../store/useConversation';
import toast from 'react-hot-toast';

const useGetMsgs = () => {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedConversation } = useConversation();

  useEffect(() => {
    const getMsgs = async () => {
      setLoading(true);
      try {
        const res = await fetch(`/api/messages/${selectedConversation._id}`);
        const data = await res.json();
        if (data.error) {
          throw new Error(data.error);
        }
        setMessages(data);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };
    if (selectedConversation?._id) getMsgs();
  }, [selectedConversation?._id, setMessages]);

  return { messages, loading };
};

export default useGetMsgs;
