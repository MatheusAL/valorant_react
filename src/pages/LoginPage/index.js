import React from 'react';
import Login from '../../Components/Login/index';
import Grid from '@material-ui/core/Grid';
import Info from '../../Components/Info/index';


function LoginPage(){
    return(
        <Grid
            container
            spacing={0}
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
