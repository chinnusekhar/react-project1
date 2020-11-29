import React from "react";
import "../css/description.css"
import Job from '../components/job';

function Description (props){
return(
    <div className= "job">
      <div className="job1">
          <div style={{padding:"30px ",textAlign:"left",marginLeft:"5px", fontSize:"18px"}}> Job Description</div>
          <div className="about">
            <div style={{width:"200px", textAlign:"left",fontWeight:"normal",paddingTop:"5px"}}>Rank</div>
            <div style={{width:"300px", textAlign:"left",fontWeight:"normal",color:"darkslategrey",paddingTop:"5px"}}>{props.name}</div>
          </div>
          <div className="about">
            <div style={{width:"200px", textAlign:"left",fontWeight:"normal",paddingTop:"7px"}}>Ship type</div>
            <div style={{width:"300px", textAlign:"left",fontWeight:"normal",color:"darkslategrey",paddingTop:"7px"}}>{props.job}</div>
          </div>
          <div className="about">
            <div style={{width:"200px", textAlign:"left",fontWeight:"normal",paddingTop:"7px"}}>Min. Experience</div>
            <div style={{width:"300px", textAlign:"left",fontWeight:"normal",color:"darkslategrey",paddingTop:"7px"}}>06 Months</div>
          </div>
          <div className="about">
            <div style={{width:"200px", textAlign:"left",fontWeight:"normal",paddingTop:"7px"}}>US Visa</div>
            <div style={{width:"300px", textAlign:"left",fontWeight:"normal",color:"darkslategrey",paddingTop:"7px"}}>Required</div>
          </div>
          <div className="about">
            <div style={{width:"200px", textAlign:"left",fontWeight:"normal",paddingTop:"7px"}}>Approx Joining</div>
            <div style={{width:"300px", textAlign:"left",fontWeight:"normal",color:"darkslategrey",paddingTop:"7px"}}>20 December 2020</div>
          </div>
          <div className="about">
            <div style={{width:"200px", textAlign:"left",fontWeight:"normal",paddingTop:"7px"}}>Salary</div>
            <div style={{width:"300px", textAlign:"left",fontWeight:"normal",color:"darkslategrey",paddingTop:"7px"}}>5000 USD</div>
          </div>
          <div className="about1">
            <div style={{width:"200px", textAlign:"left",fontWeight:"normal",paddingTop:"7px"}}>Ship Details</div>
            <div style={{width:"300px", textAlign:"left",fontWeight:"normal",color:"darkslategrey",paddingTop:"7px",display:"grid",lineheight: "0.8px"}}><div>Chembulk Giberlater </div><div>20000DWT </div><div>2010Built</div></div>
          </div>
          <div className="about2">
            <div style={{width:"200px", textAlign:"left",fontWeight:"normal",paddingTop:"7px"}}>Description</div>
            <div style={{width:"310px", textAlign:"left",fontWeight:"normal",color:"darkslategrey",paddingTop:"10px", lineheight: "25px"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</div>
          </div>

      </div>
      </div>
      
)
}

export default Description;