import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

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
