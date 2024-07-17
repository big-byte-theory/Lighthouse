export default class UserController { 
  getAllUsers = async (req, res) => {
    try {
      const users = await User.find();
      return res.json(users);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  };
}