import React, {useContext} from 'react'
import UserContext from '../context/UserContext'

function Profile() {
    const {user} = useContext(UserContext)
    
    if (!user) return <div>please login</div>

    return <div>Welcome {user.username}</div>
}

export default Profile
/*
🧠 Overall Flow
Login component
      ↓
setUser()
      ↓
Context me user save
      ↓
Profile component
      ↓
useContext se user nikala
      ↓
screen pe show
🔥 IMPORTS
import React, {useContext} from 'react'

👉 useContext use hoga global data lene ke liye

🔥 Context import
import UserContext from '../context/UserContext'

👉 Ye wahi context hai jisme user save hua tha

🔥 Context data lena
const {user} = useContext(UserContext)
🧠 MOST IMPORTANT 🔥

👉 Context storage se:

user

nikal liya.

🚀 Example

Agar Login me:

setUser({
  username:"ASR",
  password:"123"
})

hua tha…

To yaha:
user = {
  username:"ASR",
  password:"123"
}
🔥 IF CONDITION
if (!user)
🧠 Meaning

👉 Agar user nahi hai:

null
undefined
false
Then:
return <div>please login</div>
🎯 Output
please login
🚀 Agar user exist karta hai

Example:

user = {
 username:"ASR"
}
Then ye chalega
return <div>Welcome {user.username}</div>
🧠 user.username

👉 object ke andar username

Example:

user.username

means:

ASR
🎯 Final Output
Welcome ASR
*/ 