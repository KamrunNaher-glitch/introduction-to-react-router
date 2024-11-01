import { useLoaderData } from "react-router-dom";



const UserDetailes = () => {
    const user = useLoaderData();
    const {name,website} = user;
    return (
        <div>
           <h2>Details About User:{name}</h2> 
           <p>Website:{website}</p>
        </div>
    );
};

export default UserDetailes;