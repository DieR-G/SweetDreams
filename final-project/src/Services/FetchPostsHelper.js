const FetchPostsHelper = {};

const fetchOneUrl = "https://posts-pw2021.herokuapp.com/api/v1/post/one/";

FetchPostsHelper.getPost = async (id, token) => {
    let request = await fetch(fetchOneUrl+id, {
        method: "GET",
        withCredentials: true,
        
        headers: { Authorization: `Bearer ${token}` },
    });
    if(request.ok){
        let response = await request.json();
        return { fetched: true, ...response };
    }
    else{
        return { fetched: false };
    }
}

export default FetchPostsHelper;