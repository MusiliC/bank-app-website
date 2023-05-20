import React from 'react'
import styles from '../style'
import { discount, robot } from '../assets'
import GetStarted from "./GetStarted"

const Hero = () => {
  return (
    <section id='home' className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className='flex flex-row items-center py-[6px] px-[4px] rounded-[10px] mb-2' >
          <img src={discount} alt=""  className='w-[32px] h-[32px]'/>
          <p className={`${styles.paragraph} ml-2`}>
          <span className="text-white">20%</span>   Discount For {" "}        
          <span className="text-white">1 month</span>
          </p>
        </div>

        <div className='flex flex-row items-center justify-between w-full' >
          <h1 className='flex-1 font-semibold font-poppins ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[72px]'>The next <br className='hidden sm:block' /> {" "} <span className='text-gradient' >Generation</span> {" "} </h1>

            {/* get started */}
          <div className='hidden mr-0 ss:flex md:mr-4' >
            <GetStarted/>
          </div>
        </div>

        {/*  */}

        <h1 className='font-semibold font-poppins ss:text-[68px] w-full text-[52px] text-white ss:leading-[100px] leading-[72px]'>
        payment method
        </h1>

        {/*  */}
        <p className={`${styles.paragraph} max-w-[470px] mt-5`} >Our Team of experts uses a methodology to identify the credit cards most likely to fit your needs. We examine annual percentage rates, annual fee.</p>
      </div>

      {/* right side */}

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={robot} className='w-[100%] h-[100] relative z-[5]' alt="" />
        <div className='absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient' />
        <div className='absolute z-[1] w-[80%] h-[80%] bottom-0 rounded-full pink__gradient' />

        <div className={`ss:hidden ${styles.flexCenter}`}>
          <GetStarted/>
        </div>
      </div>
    </section>
  )
}

export default Hero
