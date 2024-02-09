import { getReceiverSocketId, io } from '../socket/socket.js';
import Conversation from './../models/conversationModel.js';
import Message from './../models/messageModel.js';

export const sendMessage = async (req, res) => {
  try {
    const { id: receiverId } = req.params;
    const { message } = req.body;
    const senderId = req.user._id;

    let conversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] },
    });

    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderId, receiverId],
      });
    }

    const newMessage = new Message({
      senderId,
      receiverId,
      message,
    });

    if (newMessage) {
      conversation.messages.push(newMessage._id);
    }

    Promise.all([conversation.save(), newMessage.save()]);

    // socket
    const receiverSocketId = getReceiverSocketId(receiverId);
    if (receiverSocketId) {
      io.to(receiverSocketId).emit('newMessage', newMessage);
    }

    res.status(200).json(newMessage);
  } catch (error) {
    console.log(`Error in send message ctrl: ${error.message}`);
    res.status(500).json({ error: error.message });
  }
};

// get msgs
export const getMessages = async (req, res) => {
  try {
    const { id: userChattingWith } = req.params;
    const senderId = req.user._id;

    const conversation = await Conversation.findOne({
      participants: { $all: [senderId, userChattingWith] },
    }).populate('messages');

    if (!conversation) return res.status(200).json([]);

    const messages = conversation.messages;

    res.status(200).json(messages);
  } catch (error) {
    console.log(`Error in get messages ctrl: ${error.message}`);
    res.status(500).json({ error: error.message });
  }
};
