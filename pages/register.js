import {PrismaClient} from '@prisma/client'

import React, {useState} from 'react'
//import { PrismaClientValidationError } from '@prisma/client/runtime';
export default  function Register() {

  const[email, setEmail] = useState("");
  const[name, setName] = useState("");
  
  return <div className="register"> 
   <div className="container">
    <input onChange={e => {
       setName(e.target.value)
    }} placeholder="name" id="name"></input>
    <input  onChange={e => {
         setEmail(e.target.value)
    }} id="email "placeholder="email"></input>
    <h1 id="info"></h1>
    <button onClick = {() => {
         if(email.length == 0 || name.length == 0) {
            
         }  else {
         fetch('api/register', {
               method: 'POST',
               headers: {
                  'Content-Type': 'application/json',
               },
               body: 
                  JSON.stringify({
                     'name':  name,
                     'email': email,
               
                  })
         }).then(res => res.json()).then(JSON => {
            document.getElementById("info").innerHTML = "succesfully made register"
         })
      }
    }}>Register</button>
    </div>
  </div>
}
