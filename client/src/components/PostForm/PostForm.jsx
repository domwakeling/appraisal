import React, { useState } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import useStyles from '../../styles/postform_styles';
import { createPost } from '../../actions/posts';

const PostForm = () => {
    const [postData, setPostData] = useState({
        creator: '',
        title: '',
        message: '',
        tags: ''
    })

    const classes = useStyles();
    const dispatch = useDispatch();

    const clear = (e) => {
        e.preventDefault();
        setPostData({
            creator: '',
            title: '',
            message: '',
            tags: ''
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createPost(postData));
        // clear on completion; needs an object with dummy preventDefault()
        clear({ preventDefault: () => {} });
    }

    return (
        <Paper className={classes.paper}>
            <form
                autoComplete="off"
                noValidate
                className={ `${classes.root} ${classes.form}` }
                onSubmit={handleSubmit}
            >
                <Typography variant="h6">Creating a Memory</Typography>
                <TextField
                    name="creator"
                    variant="outlined"
                    label="Creator"
                    fullWidth
                    value={postData.creator}
                    onChange={(e) => setPostData({ ...postData, creator: e.target.value })}
                />
                <TextField
                    name="title"
                    variant="outlined"
                    label="Title"
                    fullWidth
                    value={postData.title}
                    onChange={(e) => setPostData({ ...postData, title: e.target.value })}
                />
                <TextField
                    name="message"
                    variant="outlined"
                    label="Message"
                    fullWidth
                    value={postData.message}
                    onChange={(e) => setPostData({ ...postData, message: e.target.value })}
                />
                <TextField
                    name="tags"
                    variant="outlined"
                    label="Tags"
                    fullWidth
                    value={postData.tags}
                    onChange={(e) => setPostData({ ...postData, tags: e.target.value })}
                />
                <Button
                    className={classes.buttonSubmit}
                    variant="contained"
                    color="primary"
                    size="large"
                    type="submit"
                    fullWidth
                >
                    Submit
                </Button>
                <Button 
                    variant="contained"
                    color="secondary"
                    size="small"
                    onClick={clear}
                    fullWidth
                >
                    Clear
                </Button>
            </form>
        </Paper>
    )
}

export default PostForm;
