const postsModel = require("./../../db/models/postsSchema");
const usersModel = require("./../../db/models/usersSchema");

const getPosts = async (req, res) => {
  postsModel
    .find({})
    .populate("comments.postedBy")
    .populate("comments.postedBy.likes")
    .populate("creator")
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.send(err);
    });
};

const addPost = async (req, res) => {
  const { image, location, creator } = req.body;

  try {
    const post = await new postsModel({
      image,
      location,
      creator,
    });
    await post.save();
    res.status(200).json({ message: "Post added successfully" });
  } catch (error) {
    res.json({ error });
  }
};

const addCommentToPost = async (req, res) => {
  const comment = {
    comment: req.body.comment,
    postedBy: req.body.postedBy,
  };

  postsModel
    .findByIdAndUpdate(
      req.body.postId,
      { $push: { comments: comment } },
      { new: true }
    )
    .populate("comments.postedBy")
    .populate("likes")
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.send(err);
    });
};

const addLikeToPost = async (req, res) => {
  try {
    postsModel.findByIdAndUpdate(
      req.body.postId,
      { $push: { likes: req.body.userId } },
      () => {
        console.log("Post has been liked");
      }
    );
    usersModel.findByIdAndUpdate(
      req.body.userId,
      { $push: { likes: req.body.postId } },
      () => {
        console.log("Post has been liked");
      }
    );
  } catch (error) {
    res.send(error);
  }
};

const deleteLikeFromPost = async (req, res) => {
  try {
    postsModel.findByIdAndUpdate(
      req.body.postId,
      { $pull: { likes: req.body.userId } },
      () => {
        console.log("Post has been liked");
      }
    );
    usersModel.findByIdAndUpdate(
      req.body.userId,
      { $pull: { likes: req.body.postId } },
      () => {
        console.log("Post has been liked");
      }
    );
  } catch (error) {
    res.send(error);
  }
};

const getUserPosts = async (req, res) => {
  const { id } = req.params;

  postsModel
    .find({ creator: id })
    .populate("comments.postedBy")
    .populate("likes")
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.send(err);
    });
};

const getUserFollowingPosts = async (req, res) => {
  const { userFollowing } = req.body;

  postsModel
    .find({ creator: { $in: userFollowing } })
    .populate("creator")
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.send(err);
    });
};

const getUserLikedPosts = async (req, res) => {
  const { id } = req.params;

  postsModel
    .find({ likes: id })
    .populate("comments.postedBy")
    .populate("likes")
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.send(err);
    });
};

const getPost = async (req, res) => {
  const { id } = req.params;

  postsModel
    .findById(id)
    .populate("comments.postedBy")
    .populate("likes")
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.send(err);
    });
};

const deletePost = async (req, res) => {
  const { id } = req.params;

  postsModel
    .findOneAndDelete({ _id: id })
    .then(() => {
      res.status(200).json({ message: "Post deleted successfully" });
    })
    .catch((err) => {
      res.send(err);
    });
};

module.exports = {
  getPosts,
  addPost,
  addCommentToPost,
  addLikeToPost,
  deleteLikeFromPost,
  getUserPosts,
  getUserFollowingPosts,
  getUserLikedPosts,
  getPost,
  deletePost,
};
