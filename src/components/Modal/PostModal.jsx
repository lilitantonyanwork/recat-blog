import './PostModal.css';
function PostModal({post, onClose}){

    if (!post) return null;

    const srcSetString = `${post.img} 1x,${post.img_2x} 2x`;
    const handleOverlayClick = (e) => {
        if (e.target.classList.contains("modal")) {
            onClose();
        }
    };
    return(
        <div className='modal' onClick={handleOverlayClick}>
            <div className='modal__content'>
                <button className='modal__close' onClick={onClose}>X</button>
                        <div className='post__image'>
                            <img src={post.img_2x} alt={post.title} srcSet={srcSetString}/>
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
        </div>
    )
}

export default PostModal;