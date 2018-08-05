import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import {connect} from 'react-redux';
import BurstMode from "@material-ui/icons/BurstMode";
import SurroundSound from "@material-ui/icons/SurroundSound";
import FontDownload from '@material-ui/icons/FontDownload';
import * as actions from '../../actions';

const styles = theme => ({
  root: {
    flex:1,
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    [theme.breakpoints.down('xs')]: {
        maxWidth:1000
    }
  },
  nested: {
    paddingLeft: theme.spacing.unit * 4,
    paddingTop: 5,
    paddingBottom: 5
  },
  listsub: {
      [theme.breakpoints.up('xs')]:{
        lineHeight:'23px'
      }
  }
});

class SiteTable extends React.Component {
  state = { imgOpen: false,
            soundOpen: false,
            fontOpen: false};
  componentWillMount(){
    this.props.dispatch(actions.fetchTotal());
  }

  handleClick = (kindOpen) => () => {
    this.setState(state => ({[kindOpen]: !(state[kindOpen]) }));
  };

  render() {
    const { classes, imgSites, soundSites, fontSites, dispatch} = this.props;
    const itemCreate = (site)=> (
        <ListItem button className={classes.nested} key={site.siteName} onClick={()=>{
          dispatch(actions.selectSite(site));
        }}>
            <ListItemText inset primary={site.siteName} />
        </ListItem>
    );
    const imgNames = imgSites.map(itemCreate);
    const soundNames = soundSites.map(itemCreate);
    const fontNames = fontSites.map(itemCreate);
    return (
      <div className={classes.root}>
        <List
          component="nav"
          subheader={<ListSubheader component="div" className={classes.listsub}>Site Lists</ListSubheader>}
        >
          <ListItem button onClick={this.handleClick("imgOpen")}>
            <ListItemIcon>
              <BurstMode />
            </ListItemIcon>
            <ListItemText inset primary="Image Sites" />
            {this.state.imgOpen ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={this.state.imgOpen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
                {imgNames}
            </List>
          </Collapse>
          <ListItem button onClick={this.handleClick("soundOpen")}>
            <ListItemIcon>
              <SurroundSound />
            </ListItemIcon>
            <ListItemText inset primary="Sound Sites" />
            {this.state.soundOpen ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={this.state.soundOpen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
                {soundNames}
            </List>
          </Collapse>
          <ListItem button onClick={this.handleClick("fontOpen")}>
            <ListItemIcon>
              <FontDownload />
            </ListItemIcon>
            <ListItemText inset primary="Font Sites"/>
            {this.state.fontOpen ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={this.state.fontOpen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
                {fontNames}
            </List>
          </Collapse>
        </List>
      </div>
    );
  }
}

function mapStateToProps(state){
    return{
        imgSites: state.sites.img_sites,
        soundSites: state.sites.sound_sites,
        fontSites: state.sites.font_sites
    }
}

export default connect(mapStateToProps)(withStyles(styles)(SiteTable));