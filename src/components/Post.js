import { NavLink } from 'react-router-dom';

const Post = ({ post }) => {
  return (  
    <article className='post'>
      <NavLink to={`/post/${post.id}`}>
        <h2>{post.title}</h2>
        <p className='post-date'>{post.datetime}</p>
      </NavLink>
      <p className="post-body">
        {(post.body).length <= 25 ? (
          post.body
        ) : `${(post.body).slice(0,25)}...`}
      </p>
    </article>
  );
}
 
export default Post;