import User from '../models/userModel.js';

export const getUsers = async (req, res) => {
  try {
    const loggedInUserId = req.user._id;

    const filteredUsers = await User.find({
      _id: { $ne: loggedInUserId },
    }).select('-password');
    res.status(200).json(filteredUsers);
  } catch (error) {
    console.log(`Error in get users ctrl: ${error.message}`);
    res.status(500).json({ error: error.message });
  }
};
