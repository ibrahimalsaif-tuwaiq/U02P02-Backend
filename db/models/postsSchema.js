const mongoose = require("mongoose");

// Posts Schema
const postsSchema = new mongoose.Schema({
  image: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  likes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
    },
  ],
  comments: [
    {
      text: String,
      created: { type: Date, default: Date.now },
      postedBy: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
    },
  ],
  created: {
    type: Date,
    default: Date.now,
  },
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
  },
});

const postsModel = mongoose.model("posts", postsSchema);

module.exports = postsModel;
