import { React, useState, useEffect } from 'react';
import Card from './Card/Card'
import SearchBar from './SearchBar/SearchBar';
import Menu from './Menu/Menu';
import Button from '../Button/Button';
import useResize from '../../CustomHooks/ResizeHook';
import { useInfiniteLoading } from '../../CustomHooks/InfiniteLoading'

import postsServices from '../../Services/posts.services'




//Container component, only purpose is to keep in order all the mess inside

const Container = () => {
    const breakpointMobile = 768;
    const [posts, SetPosts] = useState([]);
    const [page, SetPage] = useState(0);
    const [clear, SetClear] = useState(false);
    const [height, width] = useResize();
    const [limit, SetLimit] = useState(15);
    const { loadMoreRef, items, hasMore, loadItems, loadNext } = useInfiniteLoading({ getter: postsServices.getPosts, getToken: postsServices.tempLogin, limit: limit, page: page });


    const fetchPosts = async () => {
        try {
            const loginInfo = await postsServices.tempLogin();


            const token = loginInfo['token']



            const response = await postsServices.getPosts(token, limit, page);




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


    const mobileFetchPosts = async () => {
        try {
            if (hasMore)
                SetPosts(items);

        } catch (error) {
            console.log(error);
        }
    }


    useEffect(() => {
        try {
            if (width >= breakpointMobile)
                fetchPosts();
            else {
                mobileFetchPosts()
            }
        } catch (error) {
            console.log(error);
        }

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


    const getItems = getter;
    const [items, SetItems] = useState([]);
    const pageToLoad = useRef(page);
    //creates a mutable state
    const initialPageLoaded = useRef(false);
    const [hasMore, SetHasMore] = useState(true);

    const setToken = async () => {
        const loginInfo = await getToken();
        const token = loginInfo['token']

        return token;
    }





    const loadItems = async (actualPage) => {
        try {
            const token = await setToken()
            const response = await getItems(token, limit, actualPage);


            const data = response['data'];
            SetHasMore(response['pages'] > pageToLoad.current);
            if (Array.isArray(items))
                SetItems(prevItems => [...prevItems, ...data]);
            else
                SetItems(data)

        } catch (error) {
            console.log(error)
        }
    };

    const loadNext = () => {
        pageToLoad.current = Number(pageToLoad.current) + 1;
        console.log(pageToLoad.current);
        loadItems(pageToLoad.current);
    }

    //Observer to load automatically the next batch of posts
    const { observe } = useInView({
        onEnter: () => {
            console.log('a')
            loadNext()
        }
    })

    useEffect(() => {
        if (initialPageLoaded.current)
            return;

        loadItems();
        initialPageLoaded.current = true;
    }, [loadItems]);


    // if (width < breakpointMobile && limit != 5) {
    //     SetLimit(5)
    // }
    // else if (width >= breakpointMobile && limit == 5) {
    //     SetLimit(5)
    // }


    return (
        <main className=" min-w-screen min-h-screen m-0 flex flex-col flex-wrap justify-center justify-items-center content-evenly ">
            <Menu />
            <SearchBar searchFunction={SetPosts} clearFunction={SetClear} />
            <div className="min-w-screen  flex flex-row flex-wrap justify-center justify-items-center content-evenly p- ">


                {posts.map((post) => {
                    return <Card title={post.title} key={post.id} image={post.image} />
                })}

            </div>
            <div className="w-full h-40 flex flex-row justify-center justify-items-center content-evenly ">
                {hasMore &&
                    <button ref={loadMoreRef} className={""} onClick={() => { loadNext() }} ></button>
                }
            </div>
            <div className="min-w-screen h-24 bg-purple-500 flex flex-row justify-end p-6">

            </div>
        </main >
    )



}

export default Container;