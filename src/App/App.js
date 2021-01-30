import './App.css';
import React from 'react';
import SideMenu from '../components/SideMenu';
import { makeStyles, CssBaseline} from '@material-ui/core';
import Header from '../components/Header';
import ChipsArray from '../components/ChipsArray';
import DraggableList from '../components/DraggableList';
import { useState, setState, state, initialState } from 'react';

const useStyles = makeStyles({
  rightContainer:{
    width: '60%',
    overflowY: "scroll",
    height: "100vh"

  },
  leftContainer:{
    backgroundColor: "F4F4F4",
    width: "40%",
    paddingLeft: "16px"
  },
  mainContainer:{
    display: "flex",
    padding: "0px 0px 0px 260px",
    width: "100%",
    height: "100vh",
    paddingTop: "64px"
  }
})



function App() {
  const classes = useStyles();
 

  return (
    //this is a react fragment <>Your Content Goes Here!</> 
    <>
    <Header></Header> 
    <SideMenu />
    <div className = {classes.mainContainer}>
      <div className = {classes.leftContainer}> 
        <h1>Playlist</h1>
      </div>
    
    <div className={classes.rightContainer}>
          <ChipsArray></ChipsArray>
          <DraggableList></DraggableList>
      </div>
   
    </div>

    <CssBaseline />
    
  </>
  );
}

export default App;
