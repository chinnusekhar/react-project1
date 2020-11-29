import React, {useState} from 'react';
import '../css/side.css';
import img from'../assets/profile.jpg';


function Side(){
     const Data={
         dash:"DASHBOARD",
         job:"JOBS",
         sea:"SEA DOCS",
         connect:"CONNECTIONS"
     }
     const [backgroundColor, setBackgroundColor] = useState("");
    //  const [leftBorder , setleftBorder] = useState("")
       
    return(
        <div className ="side">
         <div className="img"> <img src={img} style={{width:"100px", height:"100px",borderRadius:"50%"}}></img></div>
        <div style={{marginTop:"10px"}}> <p> Devinder Kumar </p> <p style={{fontWeight:"normal",color:"skyblue",lineHeight:0.1}}> Cheif Officer </p></div>
        <button style={{marginTop:20,borderRadius:"15px",border:"1px solid skyblue", padding:"8px",backgroundColor:"rgb(13, 116, 235)",color:"whitesmoke", outline:"none"}}>Update Profile</button>
        <div style ={{marginTop:30 , lineHeight:0.1,paddingTop:"25px" }} className="menu" onClick={()=>setBackgroundColor(Data.dash)}style={{backgroundColor:backgroundColor=== `${Data.dash}`?"blue":"rgb(32, 107, 192)",  marginTop: "30px",borderLeft:backgroundColor===`${Data.dash}`? "4px solid cyan": ""}}> <i class="fas fa-tv" style={{fontSize:"30px"}}></i> <p> {Data.dash} </p></div>
        <div style ={{ lineHeight:0.1,paddingTop:"25px" }} className="menu"onClick={()=>setBackgroundColor(Data.job)}style={{backgroundColor:backgroundColor=== `${Data.job}`?"blue":"rgb(32, 107, 192)", borderLeft:backgroundColor===`${Data.job}`? "4px solid cyan": ""}}> <i class="far fa-address-card" style={{fontSize:"30px"}}></i> <p> {Data.job} </p></div>
        <div style ={{lineHeight:0.1,paddingTop:"25px" }} className="menu" onClick={()=>setBackgroundColor(Data.sea)}style={{backgroundColor:backgroundColor=== `${Data.sea}`?"blue":"rgb(32, 107, 192)", borderLeft:backgroundColor===`${Data.sea}`? "4px solid cyan": ""}}> <i class="fas fa-file-alt" style={{fontSize:"30px"}}></i> <p> {Data.sea} </p></div>
        <div style ={{lineHeight:0.1,paddingTop:"25px" }} className="menu" onClick={()=>setBackgroundColor(Data.connect)}style={{backgroundColor:backgroundColor=== `${Data.connect}`?"blue":"rgb(32, 107, 192)",borderLeft:backgroundColor===`${Data.connect}`? "4px solid cyan": ""}}> <i class="fas fa-user-friends" style={{fontSize:"30px"}}></i> <p> {Data.connect} </p></div>
        </div>
    )
}

export default Side;
