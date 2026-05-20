import React, {useState, useContext} from 'react'
import UserContext from '../context/UserContext'

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const {setUser} = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({username, password})
    }
  return (
    <div>
        <h2>Login</h2>
        <input type='text'
        value={username}
        onChange={(e) => setUsername(e.target.value) }
        placeholder='username'  />
        {" "}
        <input type='text' 
        value={password}
        onChange={(e) => setPassword(e.target.value) }
        placeholder='password'  />
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login

/*
Tumhara app kya kar raha?

Tum login form bana rahe ho.

User:

username dalta hai
password dalta hai

Fir submit karta hai.

🚀 STEP 1 → User type karta hai
<input
value={username}
onChange={(e)=>setUsername(e.target.value)}
/>
🧠 Example

User ne type kiya:

ASR
🔥 Flow
e.target.value = "ASR"

fir:

setUsername("ASR")
🧠 Result
username = "ASR"

state update ho gayi.

🚀 Same password me
12345
Ab state:
username = "ASR"
password = "12345"
🚀 STEP 2 → Submit button
<button onClick={handleSubmit}>

👉 click hua to:

handleSubmit()

run hoga.

🚀 STEP 3 → handleSubmit
const handleSubmit = () => {
   setUser({username,password})
}
🧠 Yaha MOST IMPORTANT 🔥

👉 setUser() context ka function hai

Ye global data update karta hai.

🚀 Tumne bheja:
{
 username:"ASR",
 password:"12345"
}
🧠 Ab kya hua?

Pure app me user available 🔥

🎯 Example
Navbar.jsx
const {user} = useContext(UserContext)
Output
ASR
🔥 Real life analogy
WITHOUT CONTEXT

👉 Har component ko manually bhejna padta:

App → Navbar → Profile → Login
WITH CONTEXT

👉 Global storage ban gaya:

sab directly access kar sakte
🧠 Super Simple Visual
Login page
    ↓
setUser()
    ↓
Context storage update
    ↓
Whole app gets user data
*/