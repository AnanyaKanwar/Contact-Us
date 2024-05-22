import React from 'react'
import Button from './button'
import { MdMessage } from 'react-icons/md'
import { IoIosCall } from "react-icons/io";
import { HiMail } from "react-icons/hi";
import Contactform from './contactform';

const contactheader = () => {
  return (
    <div className=' w-[60%] px-36 pt-10 relative'>
        <h1 className=' font-serif text-5xl font-extrabold pb-6'>
            CONTACT US
        </h1>
        <p className=' font-bold text-gray-500'>
        LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU! WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT , YOU CAN REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE, EMAIL, OR SOCIAL MEDIA. 
        </p>

        <div className=' flex gap-10 pt-11'>
        <Button clr="true" text="VIA SUPPORT CHAT" icon={<MdMessage/>} />
        <Button  clr="true" text="VIA CALL" icon={<IoIosCall />} />
        </div>
        <Button clr="false" text="VIA EMAIL FORM" icon={<HiMail/>}/>

        <div >
          <Contactform item="Name"/>
          <Contactform item="E-Mail"/>
          <Contactform item="Text"/>
        </div>

        <Button clr="submit" text="SUBMIT"></Button>
      
    </div>
  )
}

export default contactheader
