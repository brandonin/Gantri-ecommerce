import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    heroUnit: {
        backgroundColor: "#1C1C1C",
        height: '500px',
    },
    heroContent: {
        maxWidth: 600,
        margin: '0 10px',
        padding: `${theme.spacing.unit * 22}px 0 ${theme.spacing.unit * 6}px`,
        paddingLeft: '20px'
    },
    heroButtons: {
        marginTop: theme.spacing.unit * 4,
    }
});

function Hero(props) {
    const { classes, handleClick } = props;

    return (
        <div className={classes.heroUnit}>
          <div className={classes.heroContent}>
            <Typography component="h1" variant="h5" align="left" className="white-text">
              Stay hungry. Stay foolish.
            </Typography>
            <Typography variant="h2" align="left" className="white-text" paragraph>
              Learn from the hottest startups in the world.
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={0} justify="left">
                <Grid item>
                  <Button variant="contained" className="background-teal white-text border-radius-none" onClick={handleClick}>
                    Read Now
                  </Button>
                </Grid>
              </Grid>
            </div>
          </div>
        </div>
    )
}

Hero.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(Hero);
