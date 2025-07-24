import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { store } from './app/store.js'
import { Provider } from 'react-redux'
import { extendedApiSlice } from './features/posts/postsSlice.js'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { usersApiSlice } from './features/users/usersSlice.js'


store.dispatch(extendedApiSlice.endpoints.getPosts.initiate());
store.dispatch(usersApiSlice.endpoints.getUsers.initiate());

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Provider store={store}>
    <Router> 
      <Routes>
      <Route path='/*' element={<App />} />
      </Routes>
      </Router>
   </Provider>
  </StrictMode>,
)
