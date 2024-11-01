import { Link } from "react-router-dom";



const Post = ({post}) => {
    const {id,title} = post;
    const postStyle = {
        border: '5px solid purple',
        padding:'10px',
        borderRadius:'20px'
        
    }
    


    return (
        <div style={postStyle}>
           <h4>Post of Id : {id}</h4>
           <p>{title}</p>
           <Link to={`/post/${id}`}>Post Details</Link>
           <Link to={`/post/${id}`}>
           <button>Show Details</button></Link>
           <button>Click to see Details</button>
           
        </div>
    );
};

export default Post;