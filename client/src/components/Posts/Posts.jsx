import React from 'react';
import { useSelector } from 'react-redux';

import Post from './Post/Post.jsx';
import useStyles from './styles';

const Posts = () => {
    const posts = useSelector((state) => state.posts);
    const classes = useStyles();

    return (
        <>
            {posts.map(post => (
                <Post post={post} />
            ))}
        </>
    )
}

export default Posts;
