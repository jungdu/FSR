import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

const styles = (theme) => ({
  card: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
    height: 151,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
  },
  playIcon: {
    height: 38,
    width: 38,
  },
  imgUrl: {
    fontSize: 17
  }
});

function ImgDetail(props) {
  const { classes, siteImgUrl } = props;
  return (
    <div>
      <Card className={classes.card}>
        <div className={classes.details}>
          <CardContent className={classes.content}>
              <h4 className={classes.imgUrl}>{siteImgUrl}</h4>
          </CardContent>
        </div>
        <CardMedia
          className={classes.cover}
          image={siteImgUrl}
          title="Live from space album cover"
        />
      </Card>
    </div>
  );
}

export default withStyles(styles, { withTheme: true })(ImgDetail);