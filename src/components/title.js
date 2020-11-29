
import React, { useState }  from 'react';
import '../css/title.css';

function Title(){
        
            const myStyle = {
                width:"1025px",
                height:"70px",
                color:"black",
                display:"flex",
               padding: "5px",
               
            }

            const [color2, setcolor2] = useState("rgb(61, 60, 60)")

            const names = ["Blog", "Questions" , "Companies", "Contact"]  
            
                 
        return (
                <div className="title" style = {myStyle} >
            <div id = "left">
            <a href="#"><i class="fas fa-search" style={{color:"gray"}}></i></a>
            </div>
            <div id = "middle">
            <a class= "midA" href="#" onClick={()=>setcolor2(names[0])} style={{color:color2===`${names[0]}`?"blue":"rgb(61, 60, 60)",borderBottom:color2===`${names[0]}`?"2px solid blue":""}}>{names[0]} </a>
            <a class= "midA" href="#"  onClick={()=>setcolor2(names[1])} style={{color:color2===`${names[1]}`?"blue":"rgb(61, 60, 60)",borderBottom:color2===`${names[1]}`?"2px solid blue":""}}  > {names[1]} </a>
            <a class= "midA" href="#" onClick={()=>setcolor2(names[2])} style={{color:color2===`${names[2]}`?"blue":"rgb(61, 60, 60)",borderBottom:color2===`${names[2]}`?"2px solid blue":""}} > {names[2]} </a>
            <a class= "midA" href ="#"  onClick={()=>setcolor2(names[3])} style={{color:color2===`${names[3]}`?"blue":"rgb(61, 60, 60)",borderBottom:color2===`${names[3]}`?"2px solid blue":""}}> {names[3]} </a>
            </div>
            <div id = "right">
            <a href="#" style = {{margin:10}} ><i class="fas fa-cog"style={{color:"gray"}} ></i></a>
            <a href="#" style = {{margin:10}}><i class="fas fa-envelope-open-text"style={{color:"gray"}}></i> <div className="mailunread">7</div></a>
            <a href="#"style = {{margin:10}}><i class="fas fa-file-export"style={{color:"gray"}}></i></a>
            </div>
        </div>
        )
   };
   
export default Title;