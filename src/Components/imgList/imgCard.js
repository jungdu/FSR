import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = (theme)=>({
  card: {
    width: '30%',
    marginBottom: '30px',
    [theme.breakpoints.down('sm')]:{
        width: '48%',
        marginBottom: '10px'
    },
    [theme.breakpoints.down('xs')]:{
        width: '92%',
        marginBottom: '10px'
    }
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
});

function SimpleMediaCard(props) {
  const { classes, siteInfo: {siteName, siteDescription, siteUrl, siteImgUrl} } = props;
  return (
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={siteImgUrl}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            {siteName?siteName:'default Name'}
          </Typography>
          <Typography component="p">
            {siteDescription?siteDescription:'Default dscription'}
          </Typography>
        </CardContent>
        <CardActions>
          <Button variant="contained" size="medium" color="secondary" onClick={()=>{window.location.href=siteUrl}}>
            링크
          </Button>
        </CardActions>
      </Card>
  );
}

SimpleMediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleMediaCard);