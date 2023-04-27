import React from 'react'
import './blog.css'
import {HiOutlineArrowLongRight} from 'react-icons/hi2'
import img1 from '../Assets/img1.jpg';
import img2 from '../Assets/img2.jpg';
import img3 from '../Assets/img3.jpg';
import img4 from '../Assets/img4.jpg';

const Posts = [
    {
        id: 1,
        postImage : img1,
        title : 'Beautiful Jaipur , let us Travel !',
        desc : 'The Kingdom of Jaipur is an Hindu palace in western India with coastlines on the Atlantic Ocean and Mediterranean Sea'
    },
    {
        id: 2,
        postImage : img2,
        title : 'Beautiful Jaipur , let us Travel !',
        desc : 'The Kingdom of Jaipur is an Hindu palace in western India with coastlines on the Atlantic Ocean and Mediterranean Sea'
    },
    {
        id: 3,
        postImage : img3,
        title : 'Beautiful Jaipur , let us Travel !',
        desc : 'The Kingdom of Jaipur is an Hindu palace in western India with coastlines on the Atlantic Ocean and Mediterranean Sea'
    },
    {
        id: 4,
        postImage : img4,
        title : 'Beautiful Jaipur , let us Travel !',
        desc : 'The Kingdom of Jaipur is an Hindu palace in western India with coastlines on the Atlantic Ocean and Mediterranean Sea'
    },
]

const Blog = () => {
  return (
    <section className="blog container section">
        <div className="secContainer">


            <div className="secIntro">
                <h2 className="secTitle">
                    Our Best Blog?
                </h2>
                <p>
                    An insight to the incredible experience in the world.
                </p>
            </div>

            <div className="mainContent grid">
               {
                Posts.map(post => (
                    <div className="singlePost grid">
                    <div className="imgDivCon">
                        <img src={post.postImage} alt={post.title} />
                    </div>
                    <div className="postDetails">
                        <h3>{post.title}</h3>
                        <p>{post.desc}</p>
                    </div>
                    <a href="#" className="flex postanchor">
                        Read More
                        <HiOutlineArrowLongRight className='icon arricon'/>
                    </a>
                </div>
                ))
               }
            </div>
        </div>
    </section>
  )
}

export default Blog