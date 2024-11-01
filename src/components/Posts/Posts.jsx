import { useLoaderData } from "react-router-dom";
import Post from "../Post/Post";



const Posts = () => {
    const post =useLoaderData();
    return (
        <div>
            <h2>Posts:{post.length}</h2>
            <div className="users">
                {
                    post.map(post => <Post key={post.id} post={post}></Post>)
                }
            </div>

        </div>
    );
};

export default Posts;