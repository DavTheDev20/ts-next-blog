import type { NextPage } from 'next';
import Jumbotron from '../../components/Jumbotron';
import { useState, useEffect } from 'react';

const Posts: NextPage = () => {
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    const response = await fetch('http://localhost:3000/api/posts');
    const data = await response.json();

    setPosts(data.data);
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div>
      <Jumbotron content="Posts" />
      <div className="posts">
        {posts.map((post) => {
          return (
            <div key={post['_id']} className="post">
              <h2>{post['title']}</h2>
              <p>{post['content']}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Posts;
