import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import { HiOutlineCurrencyRupee } from 'react-icons/hi';
import { RiSettings5Fill } from 'react-icons/ri';
import Background from '../../assets/home_background.jpeg';
const useStyles = makeStyles((theme) => ({
    home: {
        backgroundImage: `url(${Background})`,
        opacity: "0.9",
        
        height: "100%",
        display: "flex",
        
        alignItems: "center",
        justifyContent: "center",
        placeContent: "center",
    },
    center:{
        fontWeight: "bold",
        fontSize: "80px",
        color: "white",
        textAlign: "center"
    },
    trapeze:{
        borderTop: "50px solid #e8eaed",
        borderLeft: "25px solid transparent",
        borderRight: "25px solid transparent",
        height: 0,
        width: "200px",
        '&:after':{
            float:"right",
            content:"",
            display: "block",
            right: 0, 
            bottom: 0,
        }
    
    },
    menu:{
        //overflow: "hidden",
        backgroundColor: "transparent",
        position: "fixed", 
        top: 0, 
        width: "100%",
        borderBottom: "1px solid white",
        display: "flex",
        justifyContent: "center",
        flexDirection: "row",
    },
    menuItem:{
        float: "left",
        display: "block",
        paddingRight: "45px",
        paddingLeft: "25px",
        color: "white",
        fontSize: "24px",
        textDecoration: "none",
        fontWeight: "bold",
    },
    text:{
        position: "absolute",
    },
    menuCenter:{
        alignItems: "center",
        display: "flex",
        justifyContent: "center"
    },
    menuRight:{
        display:"flex",
        fontSize: "24px",
        justifyContent: "flex-end",
        alignItems: "center",
        width: "100%",
        marginRight: "35px",
    },
    menuLeft:{
        display:"flex",
        fontSize: "24px",
        justifyContent: "flex-start",
        alignItems: "center",
        width: "100%",
    },
    storeItem:{
        display: "block",
        paddingRight: "15px",
        paddingLeft: "15px",
        fontSize: "36px",
        color: "white",
        textDecoration: "none",
        fontWeight: "bold",
    },
}));

function Home(){
    const classes = useStyles();
    return(
        <div className={classes.home}>
            <div className={classes.menu}>
                <div className={classes.menuLeft}>
                    <HiOutlineCurrencyRupee />
                    <HiOutlineCurrencyRupee />
                </div>
                <div className={classes.menuCenter}>
                    <a className={classes.menuItem} href="#home">Home</a>
                    <a className={classes.menuItem} href="#news">Collection</a>
                    <div className={classes.menuItem}>
                        <div className={classes.trapeze}>
                            <div className={classes.text}> 
                                Play
                            </div>
                        </div>
                    </div>
                    <a className={classes.menuItem} href="#contact">Career</a>
                    <a className={classes.menuItem} href="#contact">Store</a>
                    <a className={classes.storeItem} href="#"><HiOutlineCurrencyRupee /></a>
                    <a className={classes.storeItem} href="#"><HiOutlineCurrencyRupee /></a>
                </div>

                <div className={classes.menuRight}>
                    
                    <RiSettings5Fill />
                </div>
            </div>
            
            <Container >
                <div className={classes.center}>
                    Coming soon...
                </div>
            </Container>
        </div>
    );
}


export default Home;
