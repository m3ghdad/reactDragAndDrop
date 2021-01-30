import { reflect } from "async";

import React from 'react';
import {makeStyles, withStyles} from '@material-ui/core';

const style= ( {
    sideMenu: {
        display: 'flex',
        flexDirection: 'column',
        position: 'absolute',
        left: '0',
        top: '64px',
        width: '260px',
        height: '100%',
        backgroundColor: '#F4F4F4'
    }
})

const SideMenu =(props) => {
    const {classes} = props

    return (
        <div className={classes.sideMenu}>
            
        </div>
    )
}

export default withStyles(style) (SideMenu);