import React from 'react'
import { useState, useEffect } from 'react'
import {Container, PostForm} from '../components'
import appwriteServices from '../appwrite/config'
import { useNavigate, useParams } from 'react-router-dom'

const EditPost = () => {

    const [posts, setPosts] = useState(null)
    const {slug} = useParams()
    const navigate = useNavigate();

    useEffect(()=>{
        if(slug){
            appwriteServices.getPost(slug)
            .then((post) => {
                if(post)
                    setPosts(post)
            })
        } else {
            navigate('/')
        }
    }, [slug, navigate])

  return (
    posts ? (
        <div className="py-8">
            <Container>
                <PostForm post={post} />
            </Container>
        </div>
    ) : null
  )
}

export default EditPost