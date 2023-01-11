import Image from 'next/image'
import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { signOut, useSession } from 'next-auth/react'
import {
  BellIcon,
  ChatBubbleLeftIcon,
  HomeIcon,
  UserGroupIcon,
  Squares2X2Icon,
} from '@heroicons/react/24/solid'
import {
  FlagIcon,
  PlayIcon,
  MagnifyingGlassIcon,
  ShoppingCartIcon,
  ArrowRightOnRectangleIcon,
} from '@heroicons/react/24/outline'
import HeaderIcon from './HeaderIcon'

function Header() {
  const { data: session } = useSession()
  return (
    <div className='sticky top-0 z-50 bg-white flex items-center p-2 shadow-md'>
      {/* Left */}

      <div className='flex items-center'>
        <Image
          src='https://links.papareact.com/5me'
          width={40}
          height={40}
          alt='facebook'
        />
        <div className='flex items-center ml-3  bg-gray-100 p-2 rounded-full'>
          <MagnifyingGlassIcon className='h-6 text-gray-500' />
          <input
            type='text'
            placeholder='Search Facebook'
            className='hidden lg:inline-flex items-center flex-shrink bg-transparent ml-2 placeholder-gray-400 outline-none'
          />
        </div>
      </div>

      {/* Center */}

      <div className='flex justify-center flex-grow'>
        <div className='flex space-x-6 sm:space-x-10'>
          <HeaderIcon active Icon={HomeIcon} />
          <HeaderIcon Icon={FlagIcon} />
          <HeaderIcon Icon={PlayIcon} />
          <HeaderIcon Icon={ShoppingCartIcon} />
          <HeaderIcon Icon={UserGroupIcon} />
        </div>
      </div>

      {/* Right */}

      <div className='flex items-center sm:space-x-3'>
        <Squares2X2Icon className='icon' />
        <ChatBubbleLeftIcon className='icon' />
        <BellIcon className='icon' />
        <Menu>
          <Menu.Button>
            <Image
              src={session.user.image}
              width={40}
              height={40}
              alt='user image'
              className='rounded-full cursor-pointer'
            />
          </Menu.Button>
          <Transition
            as={Fragment}
            enter='transition ease-out duration-100'
            enterFrom='transform opacity-0 scale-95'
            enterTo='transform opacity-100 scale-100'
            leave='transition ease-in duration-75'
            leaveFrom='transform opacity-100 scale-100'
            leaveTo='transform opacity-0 scale-95'
          >
            <Menu.Items className='absolute right-3 top-12 mt-3 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
              <Menu.Item>
                {({ active }) => (
                  <div
                    className={`${
                      active ? 'bg-gray-200' : 'text-gray-900'
                    } group flex space-x-3 font-medium w-full items-center rounded-md px-2 py-2 text-sm cursor-pointer`}
                  >
                    <Image
                      src={session.user.image}
                      width={40}
                      height={40}
                      className='rounded-full object-cover'
                    />
                    <p>{session.user.name}</p>
                  </div>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <div
                    className={`${
                      active ? 'bg-gray-200' : 'text-gray-900'
                    } group flex space-x-3 font-medium w-full items-center rounded-md px-2 py-2 text-sm cursor-pointer`}
                    onClick={signOut}
                  >
                    <ArrowRightOnRectangleIcon className='h-10 w-10 p-2 bg-gray-200 rounded-full' />
                    <p>Log Out</p>
                  </div>
                )}
              </Menu.Item>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </div>
  )
}

export default Header
