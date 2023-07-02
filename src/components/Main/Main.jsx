import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';
import Bookmarked from '../Bookmarked/Bookmarked';
import './Main.css';
import swal from 'sweetalert';

const Main = () => {
    // load data
    const [blogs, setBlogs] = useState([]);
    // console.log(blogs);
    useEffect(()=>{
        fetch('blog.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[]);
    // spent time 
    const [time, setTime]=useState(0);
    const handleAddTime = (readTime) => {
        const newTime = time+parseInt(readTime);
        setTime(newTime);
    }
    // bookmark 
    const [bookmark, setBookmark] = useState([]);
    const handleAddToBookmark = (blog) => {
        const newBookmark = [...bookmark, blog];
        
        if(bookmark.includes(blog)==true){
            swal("You Have Already Bookmarked This Blog");
            setBookmark(newBookmark);
        }
        else{
            setBookmark(newBookmark);
        }
    }
    return (
        <div className='main-container'>
            <div className='main-blog-container'>
            {
                blogs.map(blog => <Blog 
                    key={blog.id} 
                    blog={blog}
                    handleAddToBookmark = {handleAddToBookmark}
                    handleAddTime = {handleAddTime}
                    ></Blog>)
            }
            </div>
            <Bookmarked spentTime={time} length={bookmark.length} bookmarked={bookmark}></Bookmarked>
        </div>
    );
};

export default Main;