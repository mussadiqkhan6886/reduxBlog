import Layout from './Components/Layout'
import SinglePostPage from './features/posts/SinglePostPage'
import { Routes, Route } from 'react-router-dom'
import PostsList from './features/Posts/PostsList'
import AddPostForm from './features/Posts/AddPostForm'

const App = () => {
  return (
     <Routes>
      <Route path="/" element={<Layout />}>

        <Route index element={<PostsList />} />

        <Route path="post">
          <Route index element={<AddPostForm />} />
          <Route path=":postId" element={<SinglePostPage />} />
         
        </Route>

      </Route>
    </Routes>
  )
}

export default App
