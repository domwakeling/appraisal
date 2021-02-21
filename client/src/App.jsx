import React from 'react';
import { Container, AppBar, Typography } from '@material-ui/core';

const App = () => {
    return (
        <Container maxwidth="lg">
            <AppBar position="static" color="inherit">
                <Typography variant="h3" component="h1" align="center" color="primary">
                    Appraisal
                </Typography>
                <Container>
                    <Typography variant="body1">
                        Some content goes here
                    </Typography>
                </Container>
            </AppBar>
        </Container>
    )
}

export default App;