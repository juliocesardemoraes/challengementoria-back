const { User } = require("./user");

// userToCreate - name, email, password
getUsers = async () => {
  try {
    const users = await User.find({});
    return users;
  } catch (error) {
    return error;
  }
};

createUser = async (userToCreate) => {
  try {
    const userCreated = await User.create(userToCreate);
    return userCreated;
  } catch (error) {
    return error;
  }
};

module.exports = { createUser, getUsers };
