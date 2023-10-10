import React from 'react'
import mark from '../images/mark.png'

const ThankYou = ({setThankYou}) => {
  
  return (
    <div className='mr-20  mt-20 thankyou'>
             <div className='ml-10'>
              <div className='ml-20 mt-60'>
                <img src={mark} alt="logo" width="60px"/>
            </div>
             <div className='text-3xl mt-5 ml-8  text-[#21092F]'>
             <h1>Thank you!</h1>
            </div>
             <div className='text-[#8F8694] mb-5 mt-5'>
              <p>We've added your card details </p>
            </div>
             </div>
          <div >
             <button onClick={() =>setThankYou(false)}
              className='bg-[#21092F] w-[300px] h-[40px] rounded-md
               text-white text-5sm'>Continue</button>
          </div>
    </div>
  )
}

export default ThankYou
