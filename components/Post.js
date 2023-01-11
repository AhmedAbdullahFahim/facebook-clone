import Image from 'next/image'
import {
  ShareIcon,
  HandThumbUpIcon,
  ChatBubbleLeftIcon,
} from '@heroicons/react/24/outline'

function Post({ name, profileImage, postImage, timestamp, message }) {
  return (
    <div className='space-y-4 bg-white mb-6 pb-2 rounded-xl shadow-md'>
      <div className='flex space-x-2 pt-3 px-3'>
        <Image
          src={profileImage}
          width={40}
          height={40}
          className='rounded-full object-cover'
          alt='profile image'
        />
        <div className=''>
          <p className='font-medium'>{name}</p>
          {timestamp ? (
            <p className='text-gray-400 text-xs'>
              {new Date(timestamp?.toDate()).toLocaleString()}
            </p>
          ) : (
            <p className='text-xs text-gray-400'>Loading...</p>
          )}
        </div>
      </div>
      <div className='px-3'>{message}</div>
      {postImage && (
        <div className='relative h-56 md:h-96 bg-white'>
          <Image src={postImage} fill className='object-cover' />
        </div>
      )}
      <div className=' pl-2 pr-2 flex pt-1 justify-between items-center rounded-b-2xl bg-white sbadkw-md text-gray-400 border-t'>
        <div className='inputIcon rounded-md'>
          <HandThumbUpIcon className='h-5' />
          <p className='text-sm sm:text-base'>Like</p>
        </div>
        <div className='inputIcon rounded-md'>
          <ChatBubbleLeftIcon className='h-5' />
          <p className='text-sm sm:text-base'>Comment</p>
        </div>
        <div className='inputIcon rounded-md'>
          <ShareIcon className='h-5' />
          <p className='text-sm sm:text-base'>Share</p>
        </div>
      </div>
    </div>
  )
}

export default Post
