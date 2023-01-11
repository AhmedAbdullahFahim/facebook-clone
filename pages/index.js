import Head from 'next/head'
import Header from '../components/Header'
import { useSession } from 'next-auth/react'
import Login from '../components/Login'
import Sidebar from '../components/Sidebar.js'
import Feed from '../components/Feed'
import Widgets from '../components/Widgets'
import { collection, getDocs, orderBy, query } from 'firebase/firestore'
import { db } from '../firebase'

export default function Home({ posts }) {
  const { data: session } = useSession()

  if (!session) {
    return <Login />
  }
  return (
    <div className='h-screen bg-gray-100 overflow-hidden'>
      <Head>
        <title>Facebook</title>
      </Head>
      <Header />
      <main className='flex'>
        <Sidebar />
        <Feed posts={posts} />
        <Widgets />
      </main>
    </div>
  )
}

export async function getServerSideProps() {
  const querySnapshot = await getDocs(
    query(collection(db, 'posts'), orderBy('timestamp', 'desc'))
  )
  const posts = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
    timestamp: null,
  }))
  return {
    props: {
      posts: posts,
    },
  }
}
