import type { NextPage } from 'next';
import Jumbotron from '../../components/Jumbotron';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import LoadingSpinner from '../../public/Spin-1s-200px.svg';
import Image from 'next/image';

const Posts: NextPage = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [reverseOrder, setReverseOrder] = useState(false);

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
      <select
        name="filter"
        id="postsFilter"
        style={{ marginLeft: '3%', marginTop: '15px' }}
        onChange={(event) => {
          if (event.target.value === 'oldestFirst') {
            setReverseOrder(false);
          } else if (event.target.value === 'newestFirst') {
            setReverseOrder(true);
          }
        }}
      >
        <option value="oldestFirst">Oldest first</option>
        <option value="newestFirst">Newest first</option>
      </select>
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
        {!reverseOrder
          ? posts.map((post: any) => {
              return (
                <div
                  key={post['_id']}
                  className="post"
                  style={{
                    margin: '2% 3%',
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
            })
          : posts
              .map((post: any) => {
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
              })
              .reverse()}
      </div>
    </div>
  );
};

export default Posts;
