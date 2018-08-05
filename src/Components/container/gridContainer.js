import React, { Component } from 'react';
import { Grid } from '../../../node_modules/@material-ui/core';

class gridContainer extends Component {
    render() {
        return (
            <Grid container>
                <Grid item xs={12} sm={6}>
                    Left Pane
                </Grid>
                <Grid item xs={12} sm={6}>
                    Right Pane
                </Grid>
            </Grid>
        );
    }
}

export default gridContainer;