import React, { useEffect, useState } from 'react'


const url = 'https://jsonplaceholder.typicode.com/users/1'
function I_FC_UserApi() {
    const [userData, setUserData] = useState({})

    const id = 2

    const url = "https://jsonplaceholder.typicode.com/users/"+id

    const getUserData = async () => {

        const response = await fetch(url)
        const jsonData = await response.json()
        setUserData(jsonData)
    }

   useEffect( ()=> {
    getUserData();
   },[])
  return (
    <div>
        <h2>User Data</h2>
        <p>
            <strong>Name : </strong> {userData.name}
            <br /><br />
            <strong>Webisite : </strong> {userData.website}
            <br /><br />
            <strong> Email : </strong> {userData.email}
            <br /><br />
            <strong>Phone : </strong> {userData.phone}
        </p>
    </div>
  )
}

export default I_FC_UserApi