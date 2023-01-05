import { useParams, NavLink } from 'react-router-dom';

const PostPage = ({ posts, handleDelete }) => {

  const { id } = useParams();
  const post = posts.find(post => (post.id).toString() === id);
    
  return (  
    <main className='post-page'>
      <article className='post'>
        {post && 
          <>
            <h2>{post.title}</h2>
            <p className="post-date">{post.datetime}</p>
            <p className="post-body">{post.body}</p>
            <button
              onClick={() => handleDelete(post.id)}
            >
              Delete Post
            </button>
          </>
        }
        {!post && 
          <>
            <h2>Post not found</h2>
            <p>Well, that's disappointing.</p>
            <p>
              <NavLink to='/'>Visit our homepage</NavLink>
            </p>
          </>
        } 
      </article>
    </main>
  );
}
 
export default PostPage;