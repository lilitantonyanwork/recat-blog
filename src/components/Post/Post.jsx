import './Post.css';
function Post({ post, onClick }){
    const srcSetString = `${post.img} 1x,${post.img_2x} 2x`;
    console.log(post);
    return (
        <div className="post__item" onClick={() => onClick(post)}>`
            <div className='post__image'>
                <img src={post.img}  alt={post.img}  srcSet={srcSetString}/>
            </div>
            <span className="post__tag">{post.tags}</span>
            <h2 className="post__title">{post.title}</h2>
            <div className="post__info df a-center">
                <span className="post__author">{post.autor}</span>
                <span className="post__date">{post.date}</span>
                <span className="post__views">{post.views} Views</span>
            </div>
            <p className="post__desc">
                {post.text}
            </p>
        </div>
    )
}

export default Post;