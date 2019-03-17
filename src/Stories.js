import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Card from './Card';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Hero from './StoriesHero';
import Slide from '@material-ui/core/Slide';

const styles = theme => ({
    layout: {
        width: 'auto',
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
        width: 1100,
        marginLeft: 'auto',
        marginRight: 'auto',
        },
    },
    cardGrid: {
        padding: `${theme.spacing.unit * 8}px 0`,
    },
    title: {
        marginBottom: '15px'
    }
});

const latest = [{author: "John Snow", title: "How I survived death."}, {author: "Ian Yang", title: "One day I woke up, and I decided to start Gantri."}, {author: "John Snow", title: "How I started Gantri"}];
const editorsPick = [{author: "Brandon In", title:"Just a cool developer I guess"}, {author: "John Doe", title: "The tale of the white walkers."}, {author: "John Sand", title: "I just found out I am a bastard"}];

function Stories(props) {
    const { classes } = props;

    return (
        <React.Fragment>
            <CssBaseline />
            <main>
                <Hero />
                <div className={classNames(classes.layout, classes.cardGrid)}>
                    <Typography component="h3" align="left" className={classes.title}>Latest</Typography>
                    <Grid container spacing={40}>
                        {latest.map((card, index) => (
                            <Card id={index} author={card.author} title={card.title}/>
                        ))}
                    </Grid>
                </div>
                <div className={classNames(classes.layout, classes.cardGrid)}>
                    <Typography component="h3" align="left" className={classes.title}>Editor's Pick</Typography>
                    <Grid container spacing={40}>
                        {editorsPick.map((card, index) => (
                            <Card id={index} author={card.author} title={card.title}/>
                        ))}
                    </Grid>
                </div>
            </main>
        </React.Fragment>
    );
}

Stories.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Stories);
