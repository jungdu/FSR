import React,{Component} from 'react';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
import {AppBar, Toolbar, Typography, Button} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';
import BurstMode from "@material-ui/icons/BurstMode";
import SurroundSound from "@material-ui/icons/SurroundSound";
import FontDownload from '@material-ui/icons/FontDownload';
import {withRouter} from 'react-router-dom';

const styles = (theme) => ({
    logo: {
        flexGrow:10
    },
    button: {
        color: "#ddd",
        fontWeight: "800",
        flexGrow:1,
        [theme.breakpoints.down('xs')]:{
            padding:5,
            fontSize:12
        }
    },
    link:{
        display:'flex'
    },
    logfont: {
        cursor: 'pointer',
        color: '#E8EAF6',
        [theme.breakpoints.down('xs')]:{
            fontSize: 30
        }
    }
})

class Header extends Component{

    render(){
        const {classes, history} = this.props;
        return (
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="display2" className={classes.logo}>
                            <strong className={classes.logfont} onClick={()=> history.push("/main")}>FSR</strong>
                    </Typography>
                    
                    <Button className={classes.button} onClick={()=> history.push("/imgsites")}> 
                        <BurstMode/> 이미지
                    </Button>
                    
                    <Button className={classes.button}  onClick={()=> history.push("/soundsites")}>
                        <SurroundSound/> 사운드
                    </Button>
                    <Button className={classes.button} onClick={()=> history.push("/fontsites")}>
                        <FontDownload/> 폰트&아이콘
                    </Button>
                </Toolbar>
            </AppBar>
        )
    }
}

export default withRouter(withStyles(styles)(Header));