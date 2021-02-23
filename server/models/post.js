import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    creator: String,
    title: String,
    message: String,
    tags: String
});

const Post = mongoose.model('Post', postSchema);

export default Post;
