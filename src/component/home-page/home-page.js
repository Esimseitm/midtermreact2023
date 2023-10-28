import React, {useState} from 'react';
import PostList from "./PostList";
import './home-page.css'
const HomePage = () => {
    const [posts, setPosts] = useState([
        {id: 1, title: 'Post number 1', body: 'Description'},
        {id: 2, title: 'Post number 2', body: 'Description 2'},
        {id: 3, title: 'Post number 3', body: 'Description 3'}
    ])

    return (
        <div>
            <div>
                <form>
                    <input type="text" placeholder="Name of post"/>
                    <input type="text" placeholder="Description of post"/>
                    <button type="submit">Add new post</button>
                </form>
                <PostList posts={posts} title="List of posts 1"/>
            </div>
            <div>
                <a href="/profile">You profile<span>Profile</span></a>
            </div>
        </div>
    )
};

export default HomePage;