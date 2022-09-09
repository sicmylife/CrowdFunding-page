import React from 'react'
import image from '../images/image-hero-mobile.jpg'
import desktopimage from '../images/image-hero-desktop.jpg'

const Showcase = () => {
  return (
    <div>

<section className='md:hidden'>
    <img src={image} alt="" />
</section>

<section className='hidden md:block '>
    <img src={desktopimage} alt="" className='w-full' />
</section>
    </div>
  )
}

export default Showcase