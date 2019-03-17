import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Signup from './Signup';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  }
};

function Header(props) {
  const { classes, handleClick } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <h4 className='cursor-pointer black-text' onClick={() => {handleClick()}}>Leanstart</h4>
          <Typography variant="h6" color="inherit" className={classes.grow}>
            {/* News */}
          </Typography>
          <Signup />
        </Toolbar>
      </AppBar>
    </div>
  );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);
