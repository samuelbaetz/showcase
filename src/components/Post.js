import {React, useState, useEffect} from 'react'
import API from '../utils/API'
import {Jumbotron, Container} from 'reactstrap'
const Post = (props) => {
    const [post, setPost] = useState(['Posts'])
    useEffect(() => {
        API.getPosts()
        .then(res => {
           setPost(res.data)
          
        })
    },[])
    console.log(post)
    return(
     <div>
         {post.map(post => {
             return(
                 <Jumbotron key={post.title}>
                 <h1>{post.title}</h1>
                 <h4>{post.pub_date}</h4>
                 <p>{post.body}</p>
                 </Jumbotron>
             )
         })}
     </div>
    )
}

export default Post