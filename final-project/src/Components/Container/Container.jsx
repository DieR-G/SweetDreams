import { React, useState, useEffect } from 'react';
import Card from './Card/Card'
import SearchBar from './SearchBar/SearchBar';
import Menu from './Menu/Menu';
import Button from '../Button/Button';

import postsServices from '../../Services/posts.services'



//Container component, only purpose is to keep in order all the mess inside

const Container = () => {
    const [posts, SetPosts] = useState([]);
    const [page, SetPage] = useState(0);


    useEffect(() => {


        const fetchPosts = async () => {
            try {
                //const loginInfo = await postsServices.tempLogin();

                const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MThjNTIwNzRjZmQ3MDRhZTMzN2Q1ZmQiLCJpYXQiOjE2Mzc2MzEyNTYsImV4cCI6MTYzODg0MDg1Nn0.DilJOf83iqOok7KtwVShRIAU0pyeBWuzhsgn3-o4Mlg"
                const response = await postsServices.getPosts(token, 15, page);



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
    }, [page])

    const changeOffset = (amount, sign) => {

        if (sign) {
            return amount + 1
        }
        else {
            if (amount === 0)
                return amount;
            else
                return amount = amount - 1;

        }
    }


    return (

        <main className=" min-w-screen min-h-screen m-0 flex flex-col flex-wrap justify-center justify-items-center content-evenly">
            <Menu />
            <SearchBar />
            <div className="flex flex-row flex-wrap justify-center justify-items-center content-evenly ">
                {posts.map((post) => {
                    return <Card title={post.title} key={post.id} image={post.image} />
                })}

            </div>
            <div className="w-full h-40 flex flex-row justify-center justify-items-center content-evenly ">
                <Button localStyle="w-40 h-10 bg-pink-500 m-6 font-normal text-white rounded-md" text="Previous" onClick={(e) => { e.preventDefault(); SetPage(changeOffset(page, false)) }} />
                <Button localStyle="w-40 h-10 bg-pink-500 m-6 font-normal text-white rounded-md" text="Next" onClick={(e) => { e.preventDefault(); SetPage(changeOffset(page, true)) }} />
            </div>
        </main>
    )
}

export default Container;