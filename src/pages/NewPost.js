const NewPost = ({
  postTitle,
  setPostTitle,
  postBody,
  setPostBody,
  handleSubmit
}) => {
  return (  
    <main className="new-post">
      <h2>New Post</h2>
      <form className="newpost-form"
        onSubmit={handleSubmit}
      >
        <label htmlFor="post-title">Title: </label>
        <input type="text"
          id="post-title"
          required
          value={postTitle}
          onChange={e => setPostTitle(e.target.value)}
        />
        <label htmlFor="post-body">Body: </label>
        <textarea
          id="post-body"
          required
          value={postBody}
          onChange={e => setPostBody(e.target.value)}
        />
        <button
          type="submit"
        >
          Submit
        </button>
      </form>
    </main>
  );
}
 
export default NewPost;