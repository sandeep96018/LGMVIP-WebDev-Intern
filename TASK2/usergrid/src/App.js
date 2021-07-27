import './App.css';
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar'
import Axios from 'axios';
import Loader from "react-loader-spinner";

function App() {
  const [isClicked, setIsClicked] = useState(0); 
  const [data, setData] = useState(null);
  const [isLoader, setIsLoader] = useState(false);

  const getUsers = () => {
  
    setIsLoader(true)

    Axios.get("https://reqres.in/api/users?page=1").then(
      (response) => {
        console.log("api data recieved")
        setData(response.data.data);

        
        setIsLoader(false)
      }
    )
  }
  
 
  useEffect(() => {
    isClicked && getUsers();
  }, [isClicked])

  return (
    <div className="App">
      
      <Navbar onSetIsClicked={setIsClicked}/>
      

{isLoader ? <div className="md"><Loader
        type="Puff"
        color="#00BFFF"
        height={150}
        width={150}
        timeout={9000} //9 secs
        /> </div>:      <div className='row'>
          <h2 className="clnts text-center"> Clients of LetsgrowMore Across The World</h2>
        
        {data&&data.map((data) => {
          return  <>  
          <div className=" stl container-card col-4 col-s-6 ml-3 ">
            <div className="row m-lg-5 ">
          <div className="card1 justify-content-center  "key={data.id}>
          <div  className="card border-info border-3  " id="crd"style={{ width: '15rem' }} >
           <img src={data.avatar} className="card-img-top" alt="failed to load image"/> 
           <div className="card-body">
           <h5 className="card-title text-center">{data.first_name} {data.last_name}</h5>
           <p className="card-text text-center">{data.email}</p>
           <a href="#" className="btn btn-primary d-block" id="view">View Profile</a>
           </div>
       </div>
       </div>
       </div>
       </div>
       
       </>
          
        })}
      </div>


}

 
    </div>
  );
}

export default App;