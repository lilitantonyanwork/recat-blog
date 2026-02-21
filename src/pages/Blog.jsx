import {useState, useEffect} from "react";
import {fetchPosts} from "../api/posts.js";
import Post from "../components/Post/Post.jsx";
import PostModal from "../components/Modal/PostModal.jsx";
function Blog({search}){
    const [posts, setPosts] = useState([]);
    const [selectedPost, setSelectedPost] = useState(null);
    useEffect(() => {
        fetchPosts().then(data => {
            setPosts(data);
        });
    }, []);


    const filterPosts = posts.filter(
        (post) =>
            post.title.toLowerCase().includes(search.toLowerCase())
    );
    return(
        <main>
            <div className="container">
                <div className="post__list df f-wrap">
                    {filterPosts.length > 0 ? (
                        filterPosts.map((post, id) => (
                            <Post key={id} post={post}   onClick={setSelectedPost}  />
                        ))
                    ) : (
                        <p className='post-list-empty'>Nothing found</p>
                    )}
                </div>
                <PostModal post={selectedPost} onClose={() => setSelectedPost(null)} />

            </div>
        </main>
    )
}
export default Blog