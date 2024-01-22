import React from 'react';
import RotatingLines from 'react-spinners/RotateLoader'
import Backdrop from '@material-ui/core/Backdrop';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

function Loader(props) {
  const classes = useStyles();
  const {loading}=props;
  return (
    <Backdrop className={classes.backdrop} open={loading}>
      <div className="sweet-loading m-5 p-5">
        <div style={{ animationDuration: '0.75s', padding: '20px', margin: '20px'}}>
          <RotatingLines
            visible="true"
            height="96"
            width="96"
            color="green"
            strokeWidth="5"
            aria-label="rotating-lines-loading"
          />
        </div>
      </div>
    </Backdrop>
  );
}

export default Loader;
