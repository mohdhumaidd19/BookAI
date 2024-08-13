import React from 'react'

const Main = () => {
  return (
    // <div className=' bg-[#1e0533] flex justify-center items-center text-center font-sans '>
    //    <h1 className='font-bold text-white text-4xl'>Explore the Possibilities of <span className="highlight text-purple-400">AI Book Writing</span> with BookAI</h1>
    //    <p >Unleash the power of AI to create captivating books in minutes. Download, Distribute wherever you want. Generate unlimited free books.</p>
    // </div>
    <div className='bg-[#1e0533] flex justify-center items-center text-center font-sans min-h-screen'>
    <div className="max-w-2xl mx-auto px-4"> {/* Optional container to limit the width */}
      <h1 className='font-bold text-white text-5xl mb-4'>
        Explore the Possibilities of <span className="highlight text-purple-400 ">AI Book Writing</span> with BookAI
      </h1>
      <p className=' text-lg text-gray-400'>
        Unleash the power of AI to create captivating books in minutes. Download, Distribute wherever you want. Generate unlimited free books.
      </p>
    </div>
  </div>
  )
}

export default Main
