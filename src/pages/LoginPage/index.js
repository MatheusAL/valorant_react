import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Login from '../../Components/Login/index';
import Grid from '@material-ui/core/Grid';
import Info from '../../Components/Info/index';

const useStyles = makeStyles((theme) => ({
    root: {
      height:"100%"
    },
   
}));

function LoginPage(){
    const classes = useStyles();
    return(
        <Grid
            container
            spacing={0}
            className={classes.root}
        >
            <Grid item xs={4}>
                <Login />
            </Grid>
            <Grid item xs={8}>
                <Info />
            </Grid>
        </Grid>

    )
}

export default LoginPage;
