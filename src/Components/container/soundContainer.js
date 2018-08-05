import React, {Component} from 'react';
import ImgCard from '../imgList/imgCard';
import { withStyles } from '@material-ui/core/styles';
import {connect} from 'react-redux';
import * as actions from '../../actions';

const styles=(theme) => ({
    root: {
        maxWidth:'1050px',
        margin: '0 auto',
        padding: '10px',
        display: 'flex',
        justifyContent:'space-around',
        alignItems:'center',
        flexWrap: 'wrap',
        [theme.breakpoints.down('xs')]:{
            marginBottom:'10px'
        }
    }
});

class SoundContainer extends Component{
    componentWillMount() {
        this.props.dispatch(actions.fetchSoundSites());        
    }

    render(){
        const {classes, soundSites} = this.props;
        let imgCards;
        if(soundSites){
            imgCards = soundSites.map((site, index) => (
                <ImgCard siteInfo={site} key={site.siteName}></ImgCard>
            ))
        }

        return (
            <div className={classes.root}>
                {imgCards}
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        soundSites: state.sites.sound_sites
    }
}

export default connect(mapStateToProps)(withStyles(styles)(SoundContainer));