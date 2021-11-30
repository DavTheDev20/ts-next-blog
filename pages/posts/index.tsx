import type { NextPage } from 'next';
import Jumbotron from '../../components/Jumbotron';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import LoadingSpinner from '../../public/Spin-1s-200px.svg';
import Image from 'next/image';

const Posts: NextPage = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getPosts = async () => {
    const response = await fetch('http://localhost:3000/api/posts');
    const data = await response.json();

    setPosts(data.data);
    setIsLoading(false);
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div>
      <Jumbotron content="Posts" />
      {isLoading ? (
        <div style={{ marginLeft: '3%', marginTop: '2%' }}>
          <Image
            src={LoadingSpinner}
            height="100"
            width="100"
            alt="Loading..."
          />
        </div>
      ) : null}

      <div className="posts">
        {posts.map((post: any) => {
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
