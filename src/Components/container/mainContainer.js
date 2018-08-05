import React, { Component } from 'react';
import {Paper} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import rootImg from '../../assets/main.jpg';
import BurstMode from "@material-ui/icons/BurstMode";
import SurroundSound from "@material-ui/icons/SurroundSound";
import FontDownload from '@material-ui/icons/FontDownload';
import {withRouter} from 'react-router-dom'

const pillItem = {
    maxWidth:400,
    padding:20,
    color:'white',
    textAlign: 'center',
    cursor: 'pointer',
    width: 120
}

const styles = (theme) => ({
    root : {
        width:'100%',
        backgroundColor: "#EfEfEf",
        paddingTop:40,
        paddingBottom:100,
        backgroundPosition: "top right",
        backgroundSize: "cover",
        backgroundImage: "url(" + rootImg + ")",
        [theme.breakpoints.down('sm')]:{
            paddingTop:0,
        }
    },
    container : {
        maxWidth:1000,
    margin:'0 auto'
    },
    title: {
        background: " rgba(0, 0, 0, 0.8)",
        textAlign: 'center',
        color:'white',
        padding: 10,
        marginBottom: 30,
        [theme.breakpoints.down('sm')]:{
            marginTop:0,
        },
        '& span':{
            letterSpacing: -2,
            fontSize:23,
            marginRight:22,
            marginLeft:-10,
            color:'#bbb'
        }
    },
    pills: {
        minHeight: 100,
        maxWidth: 1050,
        padding: 30,
        display: 'flex',
        justifyContent:'space-around'
    },
    pillItem1: {
        ...pillItem,
        backgroundColor:'#01579B',
        '&:hover': {
            backgroundColor:'#0277BD'
        }
    },
    pillItem2: {
        ...pillItem,
        backgroundColor:'#004D40',
        '&:hover': {
            backgroundColor:'#00695C'
        }
    },
    pillItem3: {
        ...pillItem,
        backgroundColor:'#3E2723',
        '&:hover': {
            backgroundColor:'#4E342E'
        }
    },
    mainIcon: {
        fontSize:74
    },
    subcon: {
        maxWidth:700,
        margin:'15px auto',
        padding: '15px 35px',
        background: ' rgba(255, 255, 255, 0.9);',
        borderRadius: '5px',
        boxShadow: theme.shadows[4],
        '& h3': {
            color:theme.palette.primary.dark
        },
        '& strong': {
            color:theme.palette.secondary.dark
        }
    }
});

class mainContainer extends Component {

    render() {
        const {classes, history} = this.props;

        return (
            <div className={classes.root}>
                <div className={classes.container}>
                    <h1 className={classes.title}>F<span>ree</span>S<span>ource</span>R<span>ecommender</span>  </h1>
                    <div className={classes.subcon}>
                        <h3> 소개하는 페이지 </h3>
                        <hr/>
                        <p>소개되는 사이트들은 운영자나 사이트에 가입한 회원들이 자발적으로 저작물을 공유하고 있습니다.<br/>
                        <strong>저작물을 사용하시기 전에 라이선스를 확인 하셔야합니다.</strong>
                        </p>
                    </div>
                    <div className={classes.pills}>
                        <Paper className={classes.pillItem1} onClick={()=>{history.push('/imgsites')}}> 
                            무료 이미지 <br/> <BurstMode className={classes.mainIcon}/>
                        </Paper>
                        <Paper className={classes.pillItem2} onClick={()=>{history.push('/soundsites')}}>
                            무료 사운드 <br/> <SurroundSound  className={classes.mainIcon} /> 
                        </Paper>
                        <Paper className={classes.pillItem3} onClick={()=>{history.push('/fontsites')}}>
                            무료 폰트 <br/> <FontDownload className={classes.mainIcon}/>
                        </Paper>
                    </div>
                    <div className={classes.subcon}>
                        <h3>Public Domain(CC0)이란</h3>
                        <hr/>
                        <p> <a href="https://creativecommons.org/publicdomain/zero/1.0/deed.ko">퍼블릭 도메인</a>은 저작권이 자유로운 저작물을 말합니다. 즉, 누구든지 어떤 방법으로 어떤 목적으로도 사용할 수 있는 저작물을 말합니다. <br/> 
                        저작권자의 허락을 구하지 않아도 이 저작물을 상업적인 목적을 포함 모든 목적으로 복사, 수정, 배포, 실연하실 수 있습니다.<br/>
                        </p>
                    </div>

                </div>
            </div>
        );
    }
}

export default withRouter(withStyles(styles)(mainContainer));