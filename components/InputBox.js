import Image from 'next/image'
import { useSession } from 'next-auth/react'
import { CameraIcon, VideoCameraIcon } from '@heroicons/react/24/solid'

import { FaceSmileIcon } from '@heroicons/react/24/outline'
import { useRef, useState } from 'react'

import { db, storage } from '../firebase'
import {
  addDoc,
  collection,
  serverTimestamp,
  updateDoc,
  doc,
} from 'firebase/firestore'
import { getDownloadURL, ref, uploadString } from 'firebase/storage'

function InputBox() {
  const { data: session } = useSession()
  const inputRef = useRef(null)
  const imageRef = useRef(null)
  const [postImage, setPostImage] = useState(null)
  const [showSubmit, setShowSubmit] = useState(false)

  const handleTextChange = () => {
    setShowSubmit(true)
    if (!inputRef.current.value) {
      setShowSubmit(false)
    }
  }

  const handleImage = (e) => {
    const reader = new FileReader()
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0])
    }
    reader.onload = (readerEvent) => {
      setPostImage(readerEvent.target.result)
    }
  }

  const removeImage = () => {
    setPostImage(null)
  }

  const sendPost = async (e) => {
    e.preventDefault()

    if (!inputRef.current.value) return

    try {
      await addDoc(collection(db, 'posts'), {
        message: inputRef.current.value,
        name: session.user.name,
        email: session.user.email,
        profileImage: session.user.image,
        timestamp: serverTimestamp(),
      }).then((document) => {
        if (postImage) {
          const storageRef = ref(storage, `posts/${document.id}`)
          uploadString(storageRef, postImage, 'data_url')
            .then((snapshot) => {
              getDownloadURL(ref(storage, snapshot.ref.fullPath)).then(
                (url) => {
                  updateDoc(doc(db, 'posts', document.id), { postImage: url })
                }
              )
            })
            .catch((err) => console.error(err))
          removeImage()
        }
      })
      console.log('post added Successfully!')
    } catch (error) {
      console.log('Error adding Post => ', error)
    }

    inputRef.current.value = ''
    setShowSubmit(false)
  }

  return (
    <form
      onSubmit={sendPost}
      className='bg-white p-2 rounded-xl shadow-md text-gray-500 font-medium mt-6'
    >
      <div className='flex space-x-4 p-4 items-center'>
        <Image
          src={session.user.image}
          height={40}
          width={40}
          className='rounded-full object-cover'
          alt=''
        />
        <input
          type='text'
          placeholder={`What's on your mind, ${session.user.name.slice(
            0,
            session.user.name.indexOf(' ')
          )}?`}
          className='rounded-full h-12 bg-gray-100 flex-grow px-5 focus:outline-none flex-1'
          ref={inputRef}
          onChange={handleTextChange}
        />
        {postImage && (
          <div
            className='flex flex-col filter hover:brightness-110 transition duration-150 transform hover:scale-105 cursor-pointer'
            onClick={removeImage}
          >
            <img src={postImage} className='h-10 object-contain' alt='' />
            <p className='text-xs text-red-500 text-center'>Remove</p>
          </div>
        )}
      </div>
      <div className='flex justify-evenly p-3 border-t'>
        <div className='inputIcon'>
          <VideoCameraIcon className='h-7 text-red-500' />
          <p className='text-xs sm:text-sm xl:text-base'>Live Video</p>
        </div>
        <div onClick={() => imageRef.current.click()} className='inputIcon'>
          <CameraIcon className='h-7 text-green-400' />
          <p className='text-xs sm:text-sm xl:text-base'>Photo/Video</p>
          <input
            type='file'
            onChange={(e) => handleImage(e)}
            ref={imageRef}
            className='hidden'
          />
        </div>
        <div className='inputIcon'>
          <FaceSmileIcon className='h-7 text-yellow-300' />
          <p className='text-xs sm:text-sm xl:text-base'>Feeling/Activity</p>
        </div>
      </div>
      <div
        className={`${
          showSubmit ? 'opacity-100' : 'opacity-0 h-0'
        } transition-opacity duration-150 ease-in-out`}
      >
        <button
          className='text-white font-bold bg-blue-500 rounded-md px-4 py-1 h-12 w-full my-1 transition hover:bg-blue-400 duration-100 ease-in-out'
          type='submit'
        >
          Post
        </button>
      </div>
    </form>
  )
}

export default InputBox
