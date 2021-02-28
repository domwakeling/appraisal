import React from 'react';
import { Card, CardActions, CardContent, Button, Typography} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';

import useStyles from '../../styles/post_styles';

const Post = (props) => {
    const { post } = props;
    const classes = useStyles();
    return (
        <Card className={classes.card}>
            <CardContent>
                <Typography variant="h5" component="h2">
                    {post.title}
                </Typography>
                <Typography className={classes.cardBodyText} variant="body1">
                    {post.message}
                </Typography>
                <Typography className={classes.cardBodyText} variant="body2">
                    #{post.tags}
                </Typography>
                <Typography variant="caption">
                    by {post.creator}
                </Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <Button size="small" color="primary" onClick={() => { }}>
                    <ThumbUpIcon fontSize="small" />
                    &nbsp;
                    Like
                    &nbsp;
                    {post.likeCount}
                </Button>
                <Button size="small" color="primary" onClick={() => { }}>
                    <ThumbUpIcon fontSize="small" />
                    &nbsp;
                    Like
                    &nbsp;
                    {post.likeCount}
                </Button>
                <Button size="small" color="primary" onClick={() => {}}>
                    <DeleteIcon fontSize="small" />
                    &nbsp;
                    Delete
                </Button>
            </CardActions>
        </Card>
    )
}

export default Post;
