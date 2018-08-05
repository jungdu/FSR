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

class ImgContainer extends Component{
    componentWillMount() {
        this.props.dispatch(actions.fetchImgSites());        
    }

    render(){
        const {classes, imgSites} = this.props;
        let imgCards;
        if(imgSites){
            imgCards = imgSites.map((site, index) => (
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
        imgSites: state.sites.img_sites
    }
}

export default connect(mapStateToProps)(withStyles(styles)(ImgContainer));