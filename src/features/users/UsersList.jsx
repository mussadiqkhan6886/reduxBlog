import React from 'react'
import { useSelector } from 'react-redux'
import { selectAllUsers } from './usersSlice'
import { Link } from 'react-router-dom'


const UsersList = () => {

    const users = useSelector(selectAllUsers)

    const renderedPost = users.map(user => (
        <li key={user.id}>
            <Link to={`/user/${user.id}`} >{user.name}</Link>
        </li>
    )) 

  return (
    <div>
      <h2>Users</h2>
      <ul>{renderedPost}</ul>
    </div>
  )
}

export default UsersList
