import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';

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
    toolbarMain: {
        borderBottom: `1px solid ${theme.palette.grey[300]}`,
    },
    toolbarTitle: {
        flex: 1,
    },
    toolbarSecondary: {
        justifyContent: 'space-between',
    },
    mainFeaturedPost: {
        backgroundColor: theme.palette.grey[800],
        color: theme.palette.common.white,
        marginBottom: theme.spacing.unit * 4,
    },
    mainFeaturedPostContent: {
        padding: `${theme.spacing.unit * 6}px`,
        [theme.breakpoints.up('md')]: {
        paddingRight: 0,
        },
    },
    mainGrid: {
        marginTop: theme.spacing.unit * 3,
    },
    fillCard: {
        width: "80%"
    },
    card: {
        display: 'flex',
        boxShadow: 'none',
        margin: 'auto',
        height: '300px'
    },
    cardGrid: {
        marginTop: '10px',
    },
    cardDetails: {
        flex: 1,
    },
    cardMedia: {
        width: "50%",
    },
    markdown: {
        padding: `${theme.spacing.unit * 3}px 0`,
    },
    sidebarAboutBox: {
        padding: theme.spacing.unit * 2,
        backgroundColor: theme.palette.grey[200],
    },
    sidebarSection: {
        marginTop: theme.spacing.unit * 3,
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        marginTop: theme.spacing.unit * 8,
        padding: `${theme.spacing.unit * 6}px 0`,
    },
});

const featuredPosts = [{
        title: 'Only the Hottest Startups',
        description: 'This is a wider card with supporting text below as a natural lead-in to additional content.',
    },
    {
        title: 'Simplest way to read',
        description: 'This is a wider card with supporting text below as a natural lead-in to additional content.',
    },
    {
        title: 'Free Forever',
        description: 'This is a wider card with supporting text below as a natural lead-in to additional content.',
    }
];

function Posts(props) {
    const { classes } = props;

    return (
        <Grid container spacing={40} className={classes.cardGrid}>
            {featuredPosts.map((post, index) => {
            if (index % 2 === 0) {
                return <Grid item key={post.title} xs={100} md={100} className={classes.fillCard + " align-center"}>
                    <Card className={classes.card}>
                    <div className={classes.cardDetails + " align-center"}>
                        <CardContent align="left">
                        <Typography component="h3" variant="h5">
                            {post.title}
                        </Typography>
                        <Typography component="p" paragraph>
                            {post.description}
                        </Typography>
                        </CardContent>
                    </div>
                    <Hidden xsDown>
                        <CardMedia
                        className={classes.cardMedia + " background-gray"}
                        title="Image title"
                        />
                    </Hidden>
                    </Card>
                </Grid>
            } else {
                return <Grid item key={post.title} xs={100} md={100} className={classes.fillCard + " align-center"}>
                    <Card className={classes.card}>
                    <Hidden xsDown>
                        <CardMedia
                        className={classes.cardMedia + " background-gray"}
                        />
                    </Hidden>
                    <div className={classes.cardDetails + " align-center"}>
                        <CardContent align="left"  className="card-content-width">
                        <Typography component="h3" variant="h5">
                            {post.title}
                        </Typography>
                        <Typography variant="p" paragraph>
                            {post.description}
                        </Typography>
                        </CardContent>
                    </div>
                    </Card>
                </Grid>
            }
        })}
        </Grid>
    )
}
Posts.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Posts);
