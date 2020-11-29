import react from 'react';

function Master (props) {
    const mystyle = {
        width:"200px",
        height:"60px",
        position:"absolute",
        left:"395px",
        top:"150px",
        textalign:"left",
        padding:"10px",
        aligncontent:"left",
        color:"#474444"

    }
    const style1 = {
        display:"flex",
        position:"absolute",
        width:"250px",
        height:"60px",
        left:"1150px",
        top:"170px"
    }
    return(
        <div>
        <div className="master" style={mystyle}>
       <div style={{fontWeight:"bold", fontSize:"18px",textAlign:"left", marginLeft:"42px"}}> {props.name}</div>
       <div style={{fontSize:"14px",textAlign:"left",marginLeft:"42px",marginTop:"3px", fontWeight:"400"}}> {props.job} </div>
       </div>

       <div className="masterright" style={style1}>
        <div style={{width:"100px",height:"27px",backgroundColor:"white",textAlign:"center",borderRadius:"20px",paddingTop:"2px", color:"gray"}}><button style={{width:"7px",height:"12px",border:"none",borderRadius:"50%",backgroundColor:"green",marginRight:"5px"}}></button>Active</div>
        <a href="#" style={{marginLeft:"12px",width:"29px",height:"28px",backgroundColor:"white",borderRadius:"50%"}}><i class="fas fa-redo-alt" style={{color:"#239fd1",fontSize:"smaller",alignItems:"center"}}></i></a>
        <a href="#" style={{marginLeft:"12px",width:"29px",height:"28px",backgroundColor:"white",borderRadius:"50%"}}><i class="fas fa-pen" style={{color:"#239fd1",fontSize:"smaller"}}></i></a>
        <a href="#" style={{marginLeft:"12px",width:"29px",height:"28px",backgroundColor:"white",borderRadius:"50%"}}><i class="fas fa-trash-alt" style={{color:"#239fd1",fontSize:"smaller"}}></i></a>
       </div>
       </div>
    )
}

export default Master;