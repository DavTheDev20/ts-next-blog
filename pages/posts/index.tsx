import type { NextPage } from 'next';
import Jumbotron from '../../components/Jumbotron';
import { useState, useEffect } from 'react';
import Link from 'next/link';

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
            <div
              key={post['_id']}
              className="post"
              style={{
                margin: '2.5%',
                borderBottom: '1px solid grey',
                width: '25%',
                paddingBottom: '1%',
              }}
            >
              <h2 style={{ marginBottom: '5px' }}>{post['title']}</h2>
              <p>
                {post['content'].slice(0, 25) + '... '}
                <Link href={'/posts/' + post['_id']}>Read More</Link>
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Posts;
