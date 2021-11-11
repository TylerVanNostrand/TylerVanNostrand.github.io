import React from 'react'
import Week1 from '../Components/BlogPosts/Week1'
import Week2 from '../Components/BlogPosts/Week2'
import Week3 from '../Components/BlogPosts/Week3'
import Week4 from '../Components/BlogPosts/Week4'
import Week5 from '../Components/BlogPosts/Week5'
import Week6 from '../Components/BlogPosts/Week6'
import Week7 from '../Components/BlogPosts/Week7'
import Week8 from '../Components/BlogPosts/Week8'
import Week9 from '../Components/BlogPosts/Week9'
import Week10 from '../Components/BlogPosts/Week10'
import Week11 from '../Components/BlogPosts/Week11'

export default function Blog() {
    return (
        <>
            <div className='container'>
                <div className="row">
                    <h1 className='text-center'>Blog Posts</h1>
                    <Week1 />
                    <Week2 />
                    <Week3 />
                    <Week4 />
                    <Week5 />
                    <Week6 />
                    <Week7 />
                    <Week8 />
                    <Week9 />
                    <Week10 />
                    <Week11 />
                </div>
            </div>
        </>
    )
}