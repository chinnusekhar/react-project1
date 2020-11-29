import react from 'react-dom';
import '../css/other.css';
import img1 from '../assets/mercy.jfif';
import img2 from '../assets/hudson.png';
import img3 from '../assets/costa.png';
import img4 from '../assets/phonician.png'; 

function Other (props){
    return(
      <div>
      <div className="box1">
          <div> Other Jobs </div>
      </div>
      <div className="outerbox">
      <div className="box2">
          <div> <img src={img1} width="60px" height="50px" ></img> </div>
          <div className="box3">
            <div style={{color:"rgb(32, 107, 192)", fontWeight:"500"}}>
              {props.name}
              </div> 
              <div>
              {props.job}
              </div>
              <div>
              {props.post}
              </div>
               </div>
               </div>
      </div>
      <div className="outerbox1">
      <div className="box2">
          <div> <img src={img2} width="60px" height="65px" ></img> </div>
          <div className="box3">
            <div style={{color:"rgb(32, 107, 192)", fontWeight:"500"}}>
              Cheif Officer
              </div> 
              <div>
              Oil Tanker
              </div>
              <div>
              {props.post}
              </div>
               </div>
               </div>
      </div>
       <div className="outerbox2">
      <div className="box2">
          <div> <img src={img3} width="60px" height="40px" style={{marginTop:"8px"}}></img> </div>
          <div className="box3">
            <div style={{color:"rgb(32, 107, 192)", fontWeight:"500"}}>
          Executive Officer
              </div> 
              <div>
              Bulk Carrier
              </div>
              <div>
              {props.post}
              </div>
               </div>
               </div>
      </div>
      <div className="outerbox3">
      <div className="box2">
          <div> <img src={img4} width="60px" height="60px" ></img> </div>
          <div className="box3">
            <div style={{color:"rgb(32, 107, 192)", fontWeight:"500"}}>
              {props.name}
              </div> 
              <div>
              {props.job}
              </div>
              <div>
              {props.post}
              </div>
               </div>
               </div>

      </div>
      <div className="spread"> 
        <div style={{width:"5px",height:"5px",borderRadius:"50%" ,backgroundColor:"gray"}}></div>
        <div style={{width:"5px",height:"5px",borderRadius:"50%" ,backgroundColor:"gray" , marginRight:"3px", marginLeft:"3px"}}></div>
        <div style={{width:"5px",height:"5px",borderRadius:"50%" ,backgroundColor:"gray"}}></div>
      </div>

      </div>
    );
}

export default Other;