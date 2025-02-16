import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home.jsx';
import About from './components/Home/About/About.jsx';
import Contact from './components/Home/Contact/Contact.jsx';
import Users from './components/Home/Users/Users.jsx';
import UserDetailes from './components/UserDetailes/UserDetailes.jsx';
import Posts from './components/Posts/Posts.jsx';
import PostDetails from './components/PostDetails/PostDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children : [
      {
        path : '/about',
        element: <About></About>
      },
      {
        path : '/Contact',
        element : <Contact></Contact>

      },
      {
        path : '/Users',
        loader: () => fetch('https://jsonplaceholder.typicode.com/users'),
        element : <Users></Users>
      },
      {
        path : '/user/:userId',
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`)
          ,
        element: <UserDetailes></UserDetailes>
      },
      {
        path : '/posts',
        loader: () =>fetch('https://jsonplaceholder.typicode.com/posts'),
        element: <Posts></Posts>
      },
      {
        path : '/post/:postId',
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
        element: <PostDetails></PostDetails>
      }
    ]
  },
  
  


]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
