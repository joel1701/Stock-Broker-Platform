const mongoose = require("mongoose");

const UserSchema = required("../schemmas/UserSchema");

const UserModel = mongoose.model("User", UserSchema);

module.exports = UserModel;