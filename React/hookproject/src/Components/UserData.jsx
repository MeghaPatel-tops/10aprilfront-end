import React, { useContext, useEffect, useMemo, useState } from 'react'
import { ThemeContext } from '../Utils/ThemeContext'
import axios from 'axios';

function UserData() {
    const {theme,setTheme}=useContext(ThemeContext);
    const [user,setUser]=useState([]);
    const [text,setText]=useState("")

    const getUers = async()=>{
        try {
            let res = await axios.get('https://fakestoreapi.com/users');
            setUser(res.data)
        } catch (error) {
            console.log(error); 
        }
    }

    // UseMemo hook 
    const FilterUser = useMemo(()=>{
            if(text==""){
                return user;
            }
            else{
                let NewUser = user.filter((index)=>{
                    if(index.username.includes(text)){
                        return index
                    }
                })
                return NewUser
            }
    },[text,user])

    useEffect(()=>{
        getUers();
    },[])

  return (
    <div  style={{
                
                backgroundColor: theme == 'light' ? 'white' : 'black',
                color: theme == 'light' ? 'black' : 'white',
                margin: '20px',
                borderWidth: '3px',
                borderStyle: 'solid',
                borderColor: theme == 'light' ? 'black' : 'white'
            }}>

           <h2>UserDetail</h2>  
           <input
        type="text"
        placeholder="Search Here"
        onChange={(e)=>{
            setText(e.target.value)
        }}
        style={{
          width: "100%",
          padding: "14px 18px",
          fontSize: "16px",
          border: "2px solid #cbd5e1",
          borderRadius: "8px",
          outline: "none",
          boxSizing: "border-box",
          transition: "0.3s",
          backgroundColor: "#fff",
          color: "#334155",
        }}
      />
               <ul
        style={{
          listStyle: "none",
          padding: 0,
          margin: 0,
        }}
      >
        {
            FilterUser && FilterUser.map((index,i)=>(
                   <li
            key={i}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              background: "#ffffff",
              padding: "15px 20px",
              marginBottom: "12px",
              borderRadius: "10px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
            }}
          >
            <span
              style={{
                fontSize: "18px",
                fontWeight: "500",
                color: "#334155",
              }}
            >
              {index.username}
            </span>
            </li>
            ))
        }
      </ul>
            </div>
  )
}

export default UserData