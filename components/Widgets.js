import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import {
  EllipsisHorizontalIcon,
  VideoCameraIcon,
} from '@heroicons/react/24/solid'
import Contact from './Contact'

const contacts = [
  {
    name: 'Elon Musk',
    profile: 'https://links.papareact.com/kxk',
  },
  {
    name: 'Jeff Bezoz',
    profile: 'https://links.papareact.com/f0p',
  },
  {
    name: 'Mark Zuckerberg',
    profile: 'https://links.papareact.com/snf',
  },
  {
    name: 'Bill Gates',
    profile: 'https://links.papareact.com/zvy',
  },
  {
    name: 'Harry Potter',
    profile: 'https://links.papareact.com/d0c',
  },
  {
    name: 'The Queen',
    profile: 'https://links.papareact.com/6gg',
  },
  {
    name: 'James Bond',
    profile: 'https://links.papareact.com/r57',
  },
]

function Widgets() {
  return (
    <div className='hidden lg:flex flex-col w-60 p-2 mt-5'>
      <div className='flex justify-between items-center text-gray-500 mb-5'>
        <h2 className='text-xl'>Contacts</h2>
        <div className='flex space-x-3'>
          <VideoCameraIcon className='h-6 cursor-pointer' />
          <MagnifyingGlassIcon className='h-6 cursor-pointer' />
          <EllipsisHorizontalIcon className='h-6 cursor-pointer' />
        </div>
      </div>
      {contacts.map((contact) => (
        <Contact
          key={contact.profile}
          name={contact.name}
          profile={contact.profile}
        />
      ))}
    </div>
  )
}

export default Widgets
