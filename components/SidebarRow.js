import Image from 'next/image'

function SidebarRow({ src, title, Icon }) {
  return (
    <div className='flex items-center space-x-2 p-3 hover:bg-gray-200 rounded-xl cursor-pointer'>
      {src && (
        <Image
          src={src}
          height={30}
          width={30}
          className='rounded-full object-cover mr-1'
        />
      )}
      {Icon && <Icon className='h-8 w-8 text-blue-500 mr-1' />}
      <p className='hidden md:inline-flex font-medium'>{title}</p>
    </div>
  )
}

export default SidebarRow
