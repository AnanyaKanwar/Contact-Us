import { MdMessage } from 'react-icons/md'

import React from 'react'

const button = (props) => {
  return (

    <div className={ ` ${props.clr=="true"?"bg-black text-white":(props.clr=="submit"?" text-white bg-black absolute right-0 mr-8 -translate-x-1/2":"border-2 w-full mt-4 border-black text-black justify-center")} flex items-center gap-1 text-black  px-[18px] py-[10px] w-[220px] text-nowrap rounded-md `}>

        {props.icon}
        {props.text}
    </div>
    
  )
}

export default button
