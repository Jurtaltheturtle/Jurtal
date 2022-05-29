import React from 'react'
export default function Home() {
  return (
    <div className="guy">
      <div className="container">
       <button>Questions</button> 
       <button>Reviews</button>
       <button>Login</button>
       <button onClick={() => document.location.href = "/register"}>Register</button>
      </div>
    </div>
  )
}
