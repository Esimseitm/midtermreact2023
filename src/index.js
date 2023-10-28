import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import HomePage from "./component/home-page/home-page";
import Profile from "./component/profile/profile";
import PostPage from "./component/post-page/post-page";


const router = createBrowserRouter([
    {
        path: "/",
        element : <HomePage/>,
    },
    {
        path: "/profile",
        element : <Profile/>,
    },
    {
        path: "/postpage",
        element: <PostPage/>
    }
])






const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

