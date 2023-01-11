import Image from 'next/image'

function Contact({ name, profile }) {
  return (
    <div className='flex items-center space-x-3 mb-2 p-2 hover:bg-gray-200 cursor-pointer rounded-xl relative'>
      <Image
        className='rounded-full object-cover h-10 w-10'
        width={40}
        height={40}
        src={profile}
      />
      <p className='font-medium'>{name}</p>
      <div className='h-3 w-3 rounded-full bg-green-400 absolute bottom-2 left-6' />
    </div>
  )
}

export default Contact
