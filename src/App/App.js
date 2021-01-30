import './App.css';
import React from 'react';
import SideMenu from '../components/SideMenu';
import { makeStyles, CssBaseline} from '@material-ui/core';
import Header from '../components/Header';
import ChipsArray from '../components/ChipsArray';
import DraggableList from '../components/DraggableList';
import { useState, setState, state, initialState } from 'react';

const useStyles = makeStyles({
  appRight:{
    paddingLeft: '260px',
    width: '75%',
  },
  appLeft:{
    backgroundColor: "black",
    display: "block",
  },
  appMain:{
    display: "flex",
    padding: "0px",
  }
})



function App() {
  const classes = useStyles();
 

  return (
    //this is a react fragment <>Your Content Goes Here!</> 
    <>
    <SideMenu />
    <Header></Header>
    <div className = {classes.appMain}>
      <div className={classes.appRight}>
          <ChipsArray></ChipsArray>
          <DraggableList></DraggableList>
      </div>

      <div className = {classes.appLeft}> 
      </div>

    </div>

    <CssBaseline />
    
  </>
  );
}

export default App;
