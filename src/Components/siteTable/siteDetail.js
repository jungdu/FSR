import React, { Component, Fragment } from 'react';
import {connect} from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ImgDetail from './imgDetail';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import { CardActions } from '../../../node_modules/@material-ui/core';
import * as actions from '../../actions';

const styles = theme => ({
    root: {
        flex:1
    },
    infoPaper: {
      ...theme.mixins.gutters(),
      paddingTop: theme.spacing.unit * 1,
      paddingBottom: theme.spacing.unit * 1,
      minHeight: 70,
      background:'#ECEFF1',
      '&:not(:last-child)':{
          marginBottom:theme.spacing.unit * 2
      }
    },
    infoTitle:{
        color: theme.palette.primary.dark,
        paddingLeft: 22,
        marginTop:10
    },
    infoName:{
        fontSize: 17,
        margin:'5px 0',
        minHeight:20,
        fontWight:300
    },
    infoDesc: {
        fontSize: 17,
        margin:'5px 0',
        minHeight:50,
        lineHeight:'150%',
        wordBreak:'break-word'
    },
    infoUrl: {
        fontSize: 17,
        margin:'5px 0',
        minHeight:50,
        lineHeight:'150%',
        wordBreak:'break-word',
        '& a:visited, & a:link, & a:active, & a:hover':{
            color: 'darkblue',
            fontWeight: 600,
            wordBreak: 'break-word'
        }
    },
    btnCon: {
      display:'flex',
      marginTop: 5
    },
    modBtn:{
      marginLeft:'auto',
      marginRight: '10px'
    },
    confirmBtn:{
      background:'#00B0FF',
      marginRight:10,
      marginLeft:'auto',
      color:'white',
      '&:hover':{
        background:'#01579B'
      }
    }
  });

  
class siteDetail extends Component {
    state = {
      clicked:'',
      currentSite:{}
    }

    componentDidUpdate(){

      if(this.props.selected._id&&this.props.selected._id !== this.state.currentSite._id){
        this.changeCliked('');
        this.setState({currentSite: {
          ...this.props.selected
        }});
      }
    }

    clickedModBtn(kind){
      this.changeCliked(kind);
    }

    clickedCancelBtn(){
      this.changeCliked('');
      this.setState({currentSite: {
        ...this.props.selected
      }});
    }

    clickedConfirmBtn(){
      this.changeCliked('');
      this.props.dispatch(actions.updateSite(this.state.currentSite));
    }

    changeCliked(kind){
      this.setState({clicked: kind});
    }

    render() {
        const {selected, classes} = this.props;


        return (
        <div className={classes.root}>
            <Paper className={classes.infoPaper} elevation={1}>
              <h3 className={classes.infoTitle}>
                사이트 이름 
              </h3>
              <h4 className={classes.infoName}>
                {selected&&selected.siteName}
              </h4>
              {this.state.clicked==='siteName'?
              <Input 
                value={this.state.currentSite.siteName}
                onChange={(event)=> {
                    const curSite = {...this.state.currentSite};
                    curSite.siteName = event.target.value;
                    this.setState({currentSite: curSite});
                  }
                }/>:null
              }
              <div className={classes.btnCon}>
              {
                this.state.clicked==='siteName'
                  ?<Fragment>
                  <Button 
                    variant="contained"
                    color="inherit"
                    className={classes.confirmBtn }
                    onClick={()=>this.clickedConfirmBtn()}>확인</Button>
                  <Button 
                    variant="contained" 
                    color="secondary"
                    className={classes.cancelBtn}
                    onClick={()=>this.clickedCancelBtn()}>취소</Button>
                  </Fragment>
                  :<Button 
                    variant="contained" 
                    color="secondary" 
                    className={classes.modBtn}  
                    disabled={selected.siteName?false:true}
                    onClick={()=>this.clickedModBtn('siteName')}>수정</Button>
              }
              </div>
            </Paper>
            <Paper className={classes.infoPaper} elevation={1}>
              <h3 className={classes.infoTitle}>
                사이트 주소
              </h3>
              <h4 className={classes.infoUrl}>
                <a href={selected&&selected.siteUrl}> {selected&&selected.siteUrl} </a>
              </h4>
              {this.state.clicked==='siteUrl'?
              <Input 
                value={this.state.currentSite.siteUrl}
                fullWidth
                rows={2}
                onChange={(event)=> {
                    const curSite = {...this.state.currentSite};
                    curSite.siteUrl = event.target.value;
                    this.setState({currentSite: curSite});
                  }
                }/>:null
              }
              <div className={classes.btnCon}>
              {
                this.state.clicked==='siteUrl'
                  ?<Fragment>
                  <Button 
                    variant="contained"
                    color="inherit"
                    className={classes.confirmBtn}
                    onClick={()=>this.clickedConfirmBtn()}>확인</Button>
                  <Button 
                    variant="contained" 
                    color="secondary"
                    className={classes.cancelBtn}
                    onClick={()=>this.clickedCancelBtn()}>취소</Button>
                  </Fragment>
                  :<Button 
                    variant="contained" 
                    color="secondary" 
                    className={classes.modBtn}  
                    disabled={selected.siteName?false:true}
                    onClick={()=>this.clickedModBtn('siteUrl')}>수정</Button>
              }
              </div>
            </Paper>
            <Paper className={classes.infoPaper} elevation={1}>
              <h3 className={classes.infoTitle}>
                사이트 설명
              </h3>
              <h4 className={classes.infoDesc}>
                {selected&&selected.siteDescription}
              </h4>
              {this.state.clicked==='siteDescription'?
              <Input 
                multiline
                value={this.state.currentSite.siteDescription}
                fullWidth
                onChange={(event)=> {
                    const curSite = {...this.state.currentSite};
                    curSite.siteDescription = event.target.value;
                    this.setState({currentSite: curSite});
                  }
                }/>:null
              }
              <div className={classes.btnCon}>
                {
                  this.state.clicked==='siteDescription'
                    ?<Fragment>
                    <Button 
                      variant="contained"
                      color="inherit"
                      className={classes.confirmBtn }
                      onClick={()=>this.clickedConfirmBtn()}>확인</Button>
                    <Button 
                      variant="contained" 
                      color="secondary"
                      className={classes.cancelBtn}
                      onClick={()=>this.clickedCancelBtn()}>취소</Button>
                    </Fragment>
                    :<Button 
                      variant="contained" 
                      color="secondary" 
                      className={classes.modBtn}  
                      disabled={selected.siteName?false:true}
                      onClick={()=>this.clickedModBtn('siteDescription')}>수정</Button>
                }
              </div>
            </Paper>
            <Paper className={classes.infoPaper} elevation={1}>
              <h3 className={classes.infoTitle}>
                사이트 이미지
              </h3>
              {selected.siteImgUrl?<ImgDetail siteImgUrl={selected&&selected.siteImgUrl}/>:null}
            </Paper>
            
        </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        selected: state.sites.selected
    }    
}

export default connect(mapStateToProps)(withStyles(styles)(siteDetail));