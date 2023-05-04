

import React from 'react'

const Boxfield = (props) => {
    return(
        <div className=' border m-3 border-black w-[30%] text-center text-sm'>
        <div className='w-full border border-black text-[14px]' >  {props.title} </div>
        <div className='flex justify-center w-full'>
            <span className='p-1 border border-black w-full' >  {props.count}</span>
            <span className='p-1 border border-black w-full' >  ${props.amount}</span>
        </div>


        </div>
    )

}

export default Boxfield