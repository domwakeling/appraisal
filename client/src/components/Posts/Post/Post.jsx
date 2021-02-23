import React from 'react';

import useStyles from './styles';

const Post = (props) => {
    const { post } = props;
    const classes = useStyles();
    return (
        <>
            <h1>{post.title}</h1>
            <p>{post.message}</p>
            <p>{post.tags}</p>
            <p>by {post.creator}</p>
        </>
    )
}

export default Post;
