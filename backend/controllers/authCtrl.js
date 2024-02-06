import generateToken from '../utils/generateToken.js';
import User from './../models/userModel.js';
import bcrypt from 'bcryptjs';

export const signup = async (req, res) => {
  try {
    const { fullName, username, password, confirmPassword, gender } = req.body;
    if (password !== confirmPassword) {
      return res.status(400).json({ error: 'Passwords do not match' });
    }

    const user = await User.findOne({ username });
    if (user) {
      return res.status(400).json({ error: 'Username already exists' });
    }

    // hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

    const newUser = await User.create({
      fullName,
      username,
      password: hashedPassword,
      gender,
      profilePic: gender === 'male' ? boyProfilePic : girlProfilePic,
    });

    generateToken(newUser._id, res);

    res.status(201).json({
      _id: newUser._id,
      fullName: newUser.fullName,
      username: newUser.username,
      profilePic: newUser.profilePic,
    });
  } catch (error) {
    console.log(`Error in signup ctrl: ${error.message}`);
    res.status(500).json({ error: error.message });
  }
};

export const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    const isPasswordMatches = await bcrypt.compare(
      password,
      user?.password || ''
    );

    if (!user || !isPasswordMatches) {
      return res.status(400).json({ error: 'Invalid credentials' });
    }

    generateToken(user._id, res);

    res.status(200).json({
      _id: user._id,
      fullName: user.fullName,
      username: user.username,
      profilePic: user.profilePic,
    });
  } catch (error) {
    console.log(`Error in login ctrl: ${error.message}`);
    res.status(500).json({ error: error.message });
  }
};

export const logout = (req, res) => {
  try {
    res.cookie('jwt', '', {
      maxAge: 0,
    });
    res.status(200).json({ message: 'Logged out successfully' });
  } catch (error) {
    console.log(`Error in logout ctrl: ${error.message}`);
    res.status(500).json({ error: error.message });
  }
};
