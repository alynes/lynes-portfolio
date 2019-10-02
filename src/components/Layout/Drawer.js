import React from 'react';

// Material Design
import { makeStyles } from "@material-ui/core";
import Divider from '@material-ui/core/Divider';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import HomeIcon from '@material-ui/icons/Home';
import AppsIcon from '@material-ui/icons/Apps';
import CardTravelIcon from '@material-ui/icons/CardTravel';

// My Components
import DrawerItem from './DrawerItem.js';
import Clock from '../Clock.js';

const useStyles = makeStyles(() => ({
    img: {
        width: '100%',
        flex: 1,
    },
    clockContainer: {
        display: "flex",
        width: "100%",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
    },
}));

/**
 * The Drawer component is the sidebar for the layout.
 *
 * IN THIS APP:
 * Layout
 */
export default function Drawer() {
    const classes = useStyles();

    const homeIcon = <HomeIcon />;
    const appsIcon = <AppsIcon />;
    const resumeIcon = <CardTravelIcon />;

    return (
        <div id={"fuckin drawer"}>
            <Toolbar>
                <div className={classes.clockContainer}>
                    <img className={classes.img} src={process.env.PUBLIC_URL + '/tourists.gif'} alt={"tourists"}/>
                    <Clock />
                </div>
            </Toolbar>
            <Divider />
            <List>
                <DrawerItem text={"Home"} url={""} svg={homeIcon} />
                <DrawerItem text={"Applications"} url={"/applications/"} svg={appsIcon} />
                <DrawerItem text={"Resumé"} url={"/resume/"} svg={resumeIcon} />
            </List>
        </div>
    )
}
