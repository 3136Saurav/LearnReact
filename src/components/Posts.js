import axios from "axios";
import React, { useEffect, useState } from "react";


function Posts(props) {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        async function apiCall() {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
            setPosts(response.data)
        }

        apiCall();
    })

    return (
        <div>
            <ul>
                {
                    posts.map((post) => <li key={post.id}>{post.title}</li>)
                }
            </ul>
        </div>
    )


}



export default Posts;










