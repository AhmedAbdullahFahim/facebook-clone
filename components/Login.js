import Image from 'next/image'
import React from 'react'
import { signIn } from 'next-auth/react'

function Login({ providers }) {
  return (
    <div className='flex flex-col justify-center items-center'>
      <Image
        src='https://links.papareact.com/t4i'
        height={400}
        width={400}
        alt='facebook'
      />
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button
            onClick={() => signIn(provider.id)}
            className='py-5 px-20 bg-blue-500 rounded-full text-white text-center cursor-pointer mt-10'
          >
            Sign in with {provider.name}
          </button>
        </div>
      ))}
    </div>
  )
}

export default Login
