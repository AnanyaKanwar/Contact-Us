import React from 'react'

const contactform = (props) => {
  return (
    <form className='pt-3 relative'>
        <div className=' absolute top-0 left-4'>
        {props.item}

        </div>
        <button className='h-[50px] w-full border-b-gray-500 border-x-gray-500 border-[1px] '></button>
    </form>
  )
}

export default contactform
