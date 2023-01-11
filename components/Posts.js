import { collection, getDocs, orderBy, query } from 'firebase/firestore'
import { useCollection } from 'react-firebase-hooks/firestore'
import { db } from '../firebase'
import Post from './Post'

const Posts = ({ posts }) => {
  const [realtimePosts] = useCollection(
    query(collection(db, 'posts'), orderBy('timestamp', 'desc'))
  )

  return (
    <div className='flex flex-col mt-6'>
      {realtimePosts
        ? realtimePosts?.docs.map((post) => {
            return (
              <Post
                key={post.id}
                name={post.data().name}
                postImage={post.data().postImage}
                profileImage={post.data().profileImage}
                timestamp={post.data().timestamp}
                message={post.data().message}
              />
            )
          })
        : posts.map((post) => {
            return (
              <Post
                key={post.id}
                name={post.name}
                postImage={post.postImage}
                profileImage={post.profileImage}
                timestamp={post.timestamp}
                message={post.message}
              />
            )
          })}
    </div>
  )
}

export default Posts
