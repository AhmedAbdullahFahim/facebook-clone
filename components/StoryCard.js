import Image from 'next/image'

function StoryCard({ name, profile, src }) {
  return (
    <div className='relative h-14 w-14 md:h-20 md:w-20 lg:h-56 lg:w-32 cursor-pointer overflow-x p-3 transition duration-200 transform ease-in hover:scale-105 hover:animate-pulse'>
      <Image
        src={profile}
        width={40}
        height={40}
        className='object-cover absolute opacity-0 lg:opacity-100 h-12 w-12 rounded-full z-50 top-2 left-2'
      />
      <Image
        src={src}
        fill
        className='object-cover filter brightness-75 rounded-full lg:rounded-3xl'
      />
      <p className='hidden lg:inline-flex sm:absolute bottom-2 font-medium text-white max-w-sm'>
        {name}
      </p>
    </div>
  )
}

export default StoryCard
