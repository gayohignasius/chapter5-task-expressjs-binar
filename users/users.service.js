const listUsers = [];

// get all users
const getUsers = (req, res) => {
  res.json(
    listUsers.length > 0
      ? listUsers
      : "User data not found! Try creating a new one."
  );
};

// create a new user
let tempId = 1;
const createUsers = (req, res) => {
  const newUser = req.body;
  let newUserId = tempId++;
  if (res.status(200)) {
    listUsers.push({ id: newUserId, ...newUser });
    res.json(`user ${req.body.username} created`);
  } else res.json("error when creating user");
};

//get user data by id
const getUserById = (req, res) => {
  const { userId } = req.params;
  if (res.status(200)) {
    const selectedUser = listUsers.find((user) => user.id == userId);
    res.json(selectedUser);
  } else res.json("error when get the data");
};

//update user data by id
const updateUser = (req, res) => {
  const { userId } = req.params;
  if (res.status(200)) {
    const selectedUser = listUsers.find((user) => user.id == userId);

    selectedUser.username = req.body.username;
    selectedUser.password = req.body.password;
    res.json(selectedUser);
  } else res.json("error when updating the data");
};

//delete user data by id
const deleteUser = (req, res) => {
  const { userId } = req.params;
  if (res.status(200)) {
    const selectedUser = listUsers.find((user) => user.id == userId);
    listUsers.splice(selectedUser, 1);
    res.send(`user ${selectedUser.username} has been successfully deleted`);
  } else res.json("error when deleting the data");
};

module.exports = {
  getUsers,
  createUsers,
  getUserById,
  updateUser,
  deleteUser,
};
