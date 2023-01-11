import StoryCard from './StoryCard'
import { useSession } from 'next-auth/react'

function Stories() {
  const { data: session } = useSession()
  const stories = [
    {
      name: 'Ahmed Abdullah',
      src: 'https://res.cloudinary.com/dzkbu5k0f/image/upload/v1673394518/8b188fc5-3145-47b8-b097-a06eead66f57_nstxrx.jpg',
      profile:
        'https://res.cloudinary.com/dzkbu5k0f/image/upload/v1673439027/295550837_150108040960987_1767449683352516642_n_eqy4wb.jpg',
    },
    {
      name: 'Elon Musk',
      src: 'https://links.papareact.com/4zn',
      profile: 'https://links.papareact.com/kxk',
    },
    {
      name: 'Jeff Bezoz',
      src: 'https://links.papareact.com/k2j',
      profile: 'https://links.papareact.com/f0p',
    },
    {
      name: 'Mark Zuckerberg',
      src: 'https://links.papareact.com/xql',
      profile: 'https://links.papareact.com/snf',
    },
    {
      name: 'Bill Gates',
      src: 'https://links.papareact.com/4u4',
      profile: 'https://links.papareact.com/zvy',
    },
  ]
  return (
    <div className='flex justify-center space-x-3 mx-auto'>
      {stories.map((story) => (
        <StoryCard
          name={story.name}
          src={story.src}
          profile={story.profile}
          key={story.name}
        />
      ))}
    </div>
  )
}

export default Stories
