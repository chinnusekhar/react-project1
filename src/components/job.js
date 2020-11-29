

import React, {useState} from 'react';
import '../css/job.css';
import  Description from '../components/description';
import INSIGHT from './insight';
import Applicants from './applicants';
import Notifications from './notifications'
import {
  BrowserRouter as Router,
  Switch,Route,
  Link
} from "react-router-dom";


function Job (props){
  const DATA = {
    Des:"DESCRIPTION",
    Ins:"INSIGHT",
    Appl:"APPLICANTS",
    Not:"NOTIFICATIONS"
  }
  
const [color1, setcolor1] = useState("");


    return(
      <>
      <Router>
        <div className="main">
      <Link to="/" id="sub" style={{marginLeft:0, textDecoration:"none"}} onClick={()=>setcolor1(DATA.Des)} style={{color:color1===`${DATA.Des}`?"blue":"gray",borderBottom:color1===`${DATA.Des}`?"2px solid blue":""}} >{DATA.Des}</Link>
      <Link to="/INSIGHT" id="sub" style={{marginLeft:0, textDecoration:"none"}} onClick={()=>setcolor1(DATA.Ins)} style={{color:color1===`${DATA.Ins}`?"blue":"gray" , borderBottom:color1===`${DATA.Ins}`?"2px solid blue":""}} >{DATA.Ins}</Link>
       <Link to="/Applicants" id="sub" style={{marginLeft:0, textDecoration:"none"}} onClick={()=>setcolor1(DATA.Appl)} style={{color:color1===`${DATA.Appl}`?"blue":"gray", borderBottom:color1===`${DATA.Appl}`?"2px solid blue":""}} >{DATA.Appl}</Link>
       <Link to="/Notifications" id="sub" style={{marginLeft:0, textDecoration:"none"}} onClick={()=>setcolor1(DATA.Not)} style={{color:color1===`${DATA.Not}`?"blue":"gray", borderBottom:color1===`${DATA.Not}`?"2px solid blue":""}} >{DATA.Not}</Link>
     
      <Switch>
      <Route exact path="/">
        <Description name = "Master" job = "Chemical Tanker"/>
      </Route>
      <Route path="/INSIGHT">
        <INSIGHT />
      </Route>
      <Route path="/Applicants">
        <Applicants />
      </Route>
      <Route path="/Notifications">
        <Notifications />
      </Route>
    </Switch>
    </div>
      </Router>
</>
);
}
   
export default Job;
