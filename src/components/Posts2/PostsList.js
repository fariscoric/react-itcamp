import React from 'react'
import {useState, useEffect} from 'react'
import './PostsList.css'
import PostItem from './PostItem'



export default function PostsList () {
    
    const [post, setPost] = useState([]);

    const fetchData = () => {
        fetch(`https://jsonplaceholder.typicode.com/posts/`)
        .then ((response) => response.json())
        .then ((json) => {
            console.log(json)
            setPost(json)
        })
    }
    

    useEffect(() => {
        fetchData()
    }, [])
    
    
    
    return (
        <div className='PostList'>
            {post.map((el) => (
                <div key={el.id}>
                    <PostItem
                    title={el.title}
                    description={el.body}
                    />
                </div>
            ))}
        </div>
    )
}