import React from 'react'
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";
import { selectById } from './postsSlice';
import { useSelector } from 'react-redux';

const SinglePostPage = () => {
    const post = useSelector(state => selectById(state, postId))

    if(!post){
        return <section><h2>Post Not Found</h2></section>
    }
  return (
        <article className="border border-gray-600 mb-5 p-4">
            <h3 className="font-semibold text-white text-xl mb-2">{post.title.toUpperCase()}</h3>
            <p className="text-gray-400">{post.body}</p>
            <p>
                <PostAuthor userId={post.userId} />
                <TimeAgo timestamp={post.date} />
            </p>
            <ReactionButtons post={post} />
        </article>
  )
}

export default SinglePostPage
