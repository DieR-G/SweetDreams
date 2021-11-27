// url for getting all the posts 
import { homePost } from "./utilites"
const BASE_URL = 'https://posts-pw2021.herokuapp.com/api/v1/post/all'
const LOGIN_URL = 'https://posts-pw2021.herokuapp.com/api/v1/auth/signin'
const ONE_URL = 'https://posts-pw2021.herokuapp.com/api/v1/post/one/';


const services = {};

services.getPosts = async (token, limit = 10, page = 0) => {
    try {
        //getting the posts from the api
        const request = await fetch(`${BASE_URL}?limit=${limit}&page=${page}`, {
            headers: {
                //Header with the auth for accesing the post
                "Authorization": `Bearer ${token}`
            },
            method: "GET", //defining the method

        })

        //chekgin if response returned withoud problems
        const response = await request.json();
        if (request.ok) {
            const simplyfiedData = response['data'].map(homePost);
            return { response: true, data: simplyfiedData };
        }


        return { response: false, data: null }

    } catch (error) {
        console.log(error);
    }
}


services.getOnePost(id, token) = async () => {
    const request = await fetch(`ONE_URL${token}`, {
        headers: {
            "Authorization": `Bearer ${token}`
        },
        method: "POST",
    })

    const response = await request.json();
    if (request.ok) {
        const simplyfiedData = homePost(response);
        return { response: true, data: simplyfiedData };
    }

    return { response: false, data: null }

}



//Temporal login, for testing purposes
/* 
Credentials 
{ "group": "30", 
"admin": { "username": "gp30_admin", 
"email": "gp30_admin@test.com", 
"password": "QNnbLKHxVe7ktNog" },

"user": { 
    "username": "gp30_user", 
"email": "gp30_user@test.com", 
"password": "x9pti00rzPcIXhBQ" }, "sync": true }

*/

services.tempLogin = async () => {


    try {
        const request = await fetch(`${LOGIN_URL}`, {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            method: "POST",
            body: "username=gp30_admin&password=QNnbLKHxVe7ktNog",
        })

        let response = await request.json()


        if (request.ok)
            return response;
        else
            return {}





    } catch (error) {
        console.log(error)
    }
}


export default services;