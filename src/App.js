import './App.css';
import Title from './components/title';
import Side from './components/side';
import Job from './components/job';
import Other from './components/other';
import Master from './components/master';
import Face from './components/face';

function App() {

  
   return (
    <div className="App">
      <div className="sidebar">
     <Side /> 
     </div>
     <div>
     <Title />
      </div>

     
      <div className= "JobDes" >
      <Job name = "Master" job = "Chemical Tanker" ></Job>
      </div>
      
      <div className= "Other">
        <Other name = "Master" job = "Chemical Tanker" post= "Posted: 20 Nov 2020"></Other>
      </div>
      <div>
        <Master name = "Master" job = "Chemical Tanker"/>
      </div>
      <div><Face></Face></div>
    </div>
  );
}

export default App;
