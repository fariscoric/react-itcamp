import React from 'react'
import './PostItem.css'

export default function PostItem({title, description}) {
    return (
        <div className='PostCard'>
        <p className='Title'>{title}</p>
        <p className='Desc'>{description}</p>
        </div>
    )
}