import React from 'react'

const stories=[
    {
        banner:'hi.jpeg',
        title:'Science Fiction',
        desc:'As Dr. Elara stepped through the shimmering portal, she knew there was no turning back. The fate of two universes now rested in her hands...'
    },
    {
        banner:'hi.jpeg',
        title:'Mystery',
        desc:'The old lighthouse stood silent, its beacon long extinguished. But on foggy nights, some swore they could still see its ghostly light...'
    },
    {
        banner:'hi.jpeg',
        title:'Fantasy',
        desc:'The ancient prophecy spoke of a child born with starlight in their eyes. As the comet blazed overhead, the kingdom held its breath...'
    },
]

const StoryCard = () => {
  return (
    <div className='w-[100vw] h-screen bg-[#1e0533] flex gap-6 justify-center p-4'>
        {
            stories.map((story,i)=>{
                return <div key={i} className='bg-white/5 opacity-90 rounded-md px-4  text-center h-[95vh] flex flex-col pt-4 w-[25vw] gap-4 hover:-translate-y-3 duration-500'>
                    <img src={story.banner} className='h-[55%] w-[65%] mx-auto object-cover rounded-lg' alt="" />
                    <div>
                        <h2 className='font-bold text-xl text-white'>{story.title}</h2>
                        <p className='mt-2 text-base font-medium italic text-slate-400 line-clamp-4'>{story.desc}</p>
                    </div>
                    <a href="#" className='text-purple-600 text-base font-bold underline'>Read More</a>
                </div>
            })
        }
    </div>
  )
}

export default StoryCard