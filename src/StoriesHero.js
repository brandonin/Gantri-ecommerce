import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    heroUnit: {
        backgroundColor: "#1C1C1C",
    },
    heroContent: {
        maxWidth: 600,
        margin: '0 auto',
        padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
    }
});

function Hero(props) {
    const { classes } = props;

    return (
        <div className={classes.heroUnit}>
            <div className={classes.heroContent}>
                <Typography component="h3" variant="h5" align="center" className="white-text">
                    Stories
                </Typography>
            </div>
        </div>
    )
}

Hero.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(Hero);
