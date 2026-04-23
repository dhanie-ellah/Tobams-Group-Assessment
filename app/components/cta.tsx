import React from 'react'

const cta = () => {
  return (
    <div className=' m-6 xl:mx-36 bg-(--primary) text-white rounded-lg px-6 py-8 xl:px-16 xl:py-8 space-y-8 flex flex-col items-center'>
        <p className=' text-lg text-center xl:hidden'>Don't just dream it—let's build it! Click now and start your project with Tobams Group. Your journey to digital excellence begins here.</p>
        <p className=' text-2xl text-center hidden xl:block'>Want to accelerate professional growth and development at your organisation? See how we can help.</p>
        <button className='bg-white w-fit m-auto text-(--primary) rounded-sm px-6 py-3'>Book a Consultation</button>
    </div>
  )
}

export default cta