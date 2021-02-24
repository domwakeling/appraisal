import React from 'react';
import { Card, CardActions, CardContent, Button, Typography} from '@material-ui/core';
// import DeleteIcon from '@material-ui/icons/Delete';

import useStyles from './styles';

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
                    TAGS: {post.tags}
                </Typography>
                <Typography variant="caption">
                    by {post.creator}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default Post;
