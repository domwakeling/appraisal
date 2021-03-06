import React from 'react';
import { useSelector } from 'react-redux';
import { Grid, CircularProgress } from '@material-ui/core';

import Post from './Post.jsx';
import useStyles from '../../styles/posts_styles';

const Posts = () => {
    const posts = useSelector((state) => state.posts);
    const classes = useStyles();

    return (
        posts.length == 0 ? (
            <CircularProgress />
        ) : (
            <Grid
                className={classes.container}
                container
                alignItems="stretch"
                spacing={3}
            >
                {posts.map(post => (
                    <Grid key={post._id} item xs={12} sm={6}>
                        <Post post={post} />
                    </Grid>
                ))}
            </Grid>
        )
    )
}

export default Posts;
