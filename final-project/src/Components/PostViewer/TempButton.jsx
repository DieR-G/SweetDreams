import { useNavigate } from "react-router"

function TempButton() {
    const postId = "61998a962869052fcd7f2df8";
    let navigate = useNavigate();
    const watchPost = () => {
        navigate(`/posts/${postId}`);
    }
    return (
        <div>
            <button onClick={watchPost} className="bg-yellow-400 text-white p-3 rounded-xl font-semibold hover:bg-yellow-500">See post</button>
        </div>
    )
}

export default TempButton