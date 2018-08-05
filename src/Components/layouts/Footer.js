import React, {Component} from 'react'
import { withStyles } from '@material-ui/core/styles';
import {Typography} from '@material-ui/core';
import ContactMail from '@material-ui/icons/ContactMail';

const styles = (theme) => ({
    root: {
        width: '100%',
        minHeight: '100px',
        backgroundColor: theme.palette.primary[900],
        display: 'flex',
        justifyContent:'space-around',
        padding: '40px 0'
    },
    contactContainer: {
        padding:'20px',
    },
    subhead: {
        color: '#CFD8DC',
        display: 'flex',
        marginBottom: 20,
        justifyContent: 'space-around'
    }
});

class Footer extends Component{

    render(){
        const {classes} = this.props;

        return (
            <div className={classes.root}>
                <div className={classes.contactContainer}>
                    <Typography variant="subheading" className={classes.subhead}>
                        연락처 CONTACT
                    </Typography>
                    <Typography variant="subheading" className={classes.subhead}>
                        <ContactMail/> 이메일 : jungdujang@gmail.com
                    </Typography>
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(Footer);