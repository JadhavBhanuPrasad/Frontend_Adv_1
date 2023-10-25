import React, { useMemo, useState } from 'react'




function K_MemoDemo() {
    
    const [cnt,changecnt] = useState(0)
   

    // const isEven = () => {
    //     return cnt%2 == 0
    // }

    const isEven = useMemo( ()=> {
        let i=1;
        while(i<90000000){ i++}
        return cnt%2 == 0
    },[cnt])

  return (
    <div>
        <h2>Memo Hook Demo</h2>

        
        
        <p>



       {cnt}--{ isEven ? 'even' : 'odd'}
        </p>
        <button onClick={ () => {
            changecnt(cnt+1)

        } }>Inc</button>

        <button onClick={ () => {
            changecnt(cnt+1)

        } }>Inc2</button>
    </div>
  )
}

export default K_MemoDemo