import React from 'react'
import person from '../assets/person.jpeg'

function Home(props) {
    let AuthCheck=false;
    let qualification ="BE IT";
  
  return (
    <div>
        <img src={person} alt="" />
       {
          AuthCheck==true ? ( <h1>Welcome to app:{props.username}</h1>):(<a>Login</a>)
       }

       <p>Qulifictaion:{qualification ?? "No data found"}</p>
    </div>
  )
}

export default Home