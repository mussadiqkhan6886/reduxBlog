import React from 'react'
import { useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { selectUserById } from './usersSlice'
import { selectAllPosts, selectPostsByUser } from '../posts/postsSlice'

const UserPage = () => {
    const {userId} = useParams()
    const user = useSelector(state => selectUserById(state, Number(userId)))

    const postForUsers = useSelector(state => selectPostsByUser(state, Number(userId)))

    const postTitles = postForUsers.map(post => (
        <li className='mb-2 hover:underline hover:text-white' key={post.id}>
             <Link to={`/post/${post.id}`}>{post.title.charAt(0).toUpperCase() + post.title.slice(1)}</Link>
        </li>
    ))

  return (
    <section className="h-[581px] bg-gradient-to-b from-gray-800 to-purple-900 px-12 flex flex-col items-center">
      <h2 className='text-3xl font-bold text-white my-2'>{user?.name}</h2>
      <ol className='font-semibold text-xl text-gray-300'>{postTitles}</ol>
    </section>
  )
}

export default UserPage
