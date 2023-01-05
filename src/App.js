import { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { format } from 'date-fns';
import RootLayout from "./layout/RootLayout";
import About from "./pages/About";
import Home from "./pages/Home";
import NewPost from "./pages/NewPost";
import NotFound from "./pages/NotFound";
import PostPage from "./pages/PostPage";


function App() {

  const [posts, setPosts] = useState(JSON.parse(localStorage.getItem('posts')) || []);

  const [search, setSearch] = useState('');
  const [searchResult, setSearchResult] = useState(JSON.parse(localStorage.getItem('posts')) || []);
  const [postTitle, setPostTitle] = useState('');
  const [postBody, setPostBody] = useState('');
  const navigate = useNavigate();

  useEffect(() => {

    const filteredResults = posts
      .filter(post => ((post.body)
      .toLowerCase())
      .includes(search.toLowerCase()) || 
      ((post.title)
      .toLowerCase())
      .includes(search.toLowerCase()));

    setSearchResult(filteredResults.reverse())
  }, [posts, search]);

  const handleSubmit = e => {
    e.preventDefault();
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
    const dateTime = format(new Date(), 'MMMM dd, yyyy pp');
    const newPost = { id, title: postTitle, datetime: dateTime, body: postBody };
    const allPosts = [...posts, newPost];
    setPosts(allPosts);
    localStorage.setItem('posts', JSON.stringify(allPosts))
    setPostTitle('');
    setPostBody('');
    navigate('/');
  };

  const handleDelete = id => {
    const postItem = posts.filter(post => post.id !== id);
    setPosts(postItem);
    localStorage.setItem('posts', JSON.stringify(postItem))
    navigate('/');
  }

  return (
    <Routes>
      <Route path="/" element={<RootLayout 
        search={search}
        setSearch={setSearch}
      />}>
        <Route index element={<Home 
          posts={searchResult}

        />}/>
        <Route path="about" element={<About />}/>

        <Route path="post" element={<NewPost 
          postTitle={postTitle}
          setPostTitle={setPostTitle}
          postBody={postBody}
          setPostBody={setPostBody}
          handleSubmit={handleSubmit}
        />}/>
        <Route path="post/:id" element={<PostPage 
          posts={posts}
          handleDelete={handleDelete}
        />}/>


        <Route path="*" element={<NotFound />}/>
      </Route>
    </Routes>    
  );
}

export default App;
