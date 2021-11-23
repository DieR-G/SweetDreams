import { React, useState, useEffect } from 'react';
import Card from './Card/Card'
import SearchBar from './SearchBar/SearchBar';
import Menu from './Menu/Menu';

import postsServices from '../../Services/posts.services'



//Container component, only purpose is to keep in order all the mess inside

const Container = () => {
    const [posts, SetPosts] = useState([]);


    useEffect(() => {


        const fetchPosts = async () => {
            try {
                //const loginInfo = await postsServices.tempLogin();

                const token ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MThjNTIwNzRjZmQ3MDRhZTMzN2Q1ZmQiLCJpYXQiOjE2Mzc2MzEyNTYsImV4cCI6MTYzODg0MDg1Nn0.DilJOf83iqOok7KtwVShRIAU0pyeBWuzhsgn3-o4Mlg"
                const response = await postsServices.getPosts(token, 15, 0);



                if (!response["response"]) {
                    console.log(response['error']);
                }
                else
                    SetPosts(response['data']);

            } catch (error) {
                console.log(error)
            };
        }


        fetchPosts();
    }, [])



    return (

        <main className=" min-w-screen min-h-screen m-0 flex flex-col flex-wrap justify-center justify-items-center content-evenly">
            <Menu />
            <SearchBar />
            <div className="flex flex-row flex-wrap justify-center justify-items-center content-evenly ">
                {posts.map((post) => {
                    return <Card title={post.title} key={post.id} image={post.image} />
                })}

            </div>
        </main>
    )
}

export default Container;