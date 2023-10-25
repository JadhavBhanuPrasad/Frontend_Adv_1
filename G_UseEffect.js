import React, { useEffect, useState } from 'react'

function G_UseEffect() {

    const[cnt,changecnt] = useState(0)
    const[cnt2,changecnt2] = useState(0)

    // useEffect( () => { //working like render, runs immediately when page load
    //     console.log('inside useEffect')
    //     document.title=cnt
    // } )
    useEffect( () => { //working like componentDidMount, when passed an empty value, so if you want to pass API or side effects, use inside this brackets 
        console.log('inside useEffect')
        document.title=cnt
    } ,[])
    // useEffect( () => { //working like ComponentdidUpdate,second parameter is dependency
    //     console.log('inside useEffect')
    //     document.title=cnt
    // } ,[cnt])

  return (
    <div>
        COUNT : {cnt} <br />
        <button onClick={ ()=> {
            changecnt(cnt+1)
        }}>Inc</button>
        <br /> <br />
        COUNT2 : {cnt2}
        <br />
        <button onClick={ ()=> {
            changecnt2(cnt2-1)
        }}>Dec</button>
    </div>
  )
}

export default G_UseEffect