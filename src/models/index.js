"use strict";
const User = require("./user"); //require the model
const Post = require("./post");

User.hasMany(Post, {
  foreignKey: "userId", // Define the foreign key in the Post model that references the User model
  as: "posts", // Alias for the association (optional)
});

Post.belongsTo(User, {
  foreignKey: "userId", // This is the foreign key in the Post model
  as: "user", // Alias for the association (optional)
});

async function init() {
  await User.sync(); // sync the model
  await Post.sync();
  // also sync any extra models here
}

init();

module.exports = {
  User, // export the model
  // also export any extra models here
  Post,
};
