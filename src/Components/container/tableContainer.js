import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import SiteTable from '../siteTable/siteTable';
import SiteDetail from '../siteTable/siteDetail';

const styles = (theme) => ({

    root: {
        maxWidth: 1050,
        minHeight: 500,
        margin: '10px auto',
        display:'flex',
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column'
        }
    }
})

class tableContainer extends Component {
    render() {
        const {classes} = this.props;

        return (
            <div className={classes.root}>
                <SiteTable />
                <SiteDetail />
            </div>
        );
    }
}

export default withStyles(styles)(tableContainer);