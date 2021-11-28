import { React, useState, useEffect } from 'react';
import Card from './Card/Card'
import SearchBar from './SearchBar/SearchBar';
import Menu from './Menu/Menu';
import Button from '../Button/Button';
import useResize from '../../../CustomHooks/ResizeHook';

import postsServices from '../../Services/posts.services'




//Container component, only purpose is to keep in order all the mess inside

const Container = () => {
    const [posts, SetPosts] = useState([]);
    const [page, SetPage] = useState(0);
    const [clear, SetClear] = useState(false);
    const [height, width] = useResize();



    useEffect(() => {


        const fetchPosts = async () => {
            try {
                const loginInfo = await postsServices.tempLogin();

                const token = loginInfo['token']

                const response = await postsServices.getPosts(token, 15, page);




                if (!response["response"]) {
                    console.log(response['error']);
                }
                else {
                    if (response['data'].length === 0)
                        SetPage(0)
                    else
                        SetPosts(response['data']);

                }



            } catch (error) {
                console.log(error)
            };
        }


        fetchPosts();
    }, [page, clear]);



    //function that determines the new offset for the page
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

        <main className=" min-w-screen min-h-screen m-0 flex flex-col flex-wrap justify-center justify-items-center content-evenly ">
            <Menu />
            <SearchBar searchFunction={SetPosts} clearFunction={SetClear} />
            <div className="min-w-screen  flex flex-row flex-wrap justify-center justify-items-center content-evenly p-20 ">

                {posts.map((post) => {
                    return <Card title={post.title} key={post.id} image={post.image} />
                })}

            </div>
            <div className="w-full h-40 flex flex-row justify-center justify-items-center content-evenly ">

                <Button localStyle="w-40 h-10 bg-pink-500 m-6 font-normal text-white rounded-md" text="Previous" onClick={(e) => { e.preventDefault(); SetPage(changeOffset(page, false)) }} />
                {clear &&
                    (<Button localStyle="w-40 h-10 bg-pink-500 m-6 font-normal text-white rounded-md" text="Clear" onClick={(e) => { e.preventDefault(); SetPage(0); SetClear(false) }} />)}
                <Button localStyle="w-40 h-10 bg-pink-500 m-6 font-normal text-white rounded-md" text="Next" onClick={(e) => { e.preventDefault(); SetPage(changeOffset(page, true)) }} />
            </div>
            <div className="w-full h-24 bg-purple-500 flex flex-row justify-end p-6">

            </div>
        </main >
    )
}

export default Container;