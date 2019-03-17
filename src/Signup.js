import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

// Dialog
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import withMobileDialog from '@material-ui/core/withMobileDialog';

const styles = theme => ({
    main: {
        width: 'auto',
        display: 'block', // Fix IE 11 issue.
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
        width: 400,
        marginLeft: 'auto',
        marginRight: 'auto',
        },
    },
    paper: {
        marginTop: '5px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
        height: "100%"
    },
    avatar: {
        margin: theme.spacing.unit,
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing.unit,
    },
    submit: {
        marginTop: theme.spacing.unit * 3,
    },
    closeButton: {
        top: 0,
        right: 5,
        margin: 0,
        position: 'absolute',
        cursor: 'pointer'
    }
});

class Signup extends React.Component {
    state = {
        open: false,
    };

    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    handleBlur = (e) => {
        // if (e.target.value === "" ||
        // e.target.value === null ||
        // e.target.value === undefined )
    }

    render() {
        const { classes, fullScreen } = this.props;

        return (
            <div>
                <Button className="teal-text" onClick={this.handleClickOpen}>
                    Sign Up
                </Button>
                <Dialog
                    fullScreen={fullScreen}
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="responsive-dialog-title"
                >
                    <h3 className={classes.closeButton} onClick={this.handleClose}>x</h3>
                    <CssBaseline />
                    <Paper className={classes.paper + " border-radius-none"}>
                        <Typography component="h3" variant="h5">
                        Sign Up
                        </Typography>
                        <form className={classes.form}>
                        <FormControl margin="normal" required fullWidth>
                            <Input id="email" name="email" autoComplete="email" autoFocus placeholder="Email" onBlur={this.handleBlur} required />
                        </FormControl>
                        <FormControl margin="normal" required fullWidth>
                            <Input name="password" type="password" id="password" autoComplete="current-password" />
                        </FormControl>
                        <DialogActions>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit + ' background-teal border-radius-none'}
                        >
                            Continue
                        </Button>
                        </DialogActions>
                        </form>
                    </Paper>
                </Dialog>
            </div>
        );
    }
}

Signup.propTypes = {
    classes: PropTypes.object.isRequired,
    fullScreen: PropTypes.bool.isRequired,
};

export default withMobileDialog()(withStyles(styles)(Signup));
