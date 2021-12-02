import { GetStaticProps, GetStaticPaths } from 'next';
import Jumbotron from '../../components/Jumbotron';
import Link from 'next/link';
import router from 'next/router';

const Post = (props: any) => {
  const post = props.data;
  const dateOptions = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  return (
    <div>
      <Jumbotron content={post.title} />
      <h3
        style={{
          marginLeft: '3%',
          marginTop: '15px',
          fontWeight: '600',
          fontSize: '1rem',
        }}
      >
        Posted On:{' '}
        {new Date(post.dateCreated).toLocaleDateString('en-US', {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })}
      </h3>
      {post.dateUpdated ? (
        <h5
          style={{ marginLeft: '3%', marginTop: '8px', marginBottom: '15px' }}
        >
          Updated On:{' '}
          {new Date(post.dateUpdated).toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </h5>
      ) : null}
      <p style={{ margin: '1% 3% 1%', width: '80%', lineHeight: '1.6' }}>
        {post.content}
      </p>
      <div>
        <Link href={'/posts/edit/' + post._id} passHref={true}>
          <button
            style={{
              marginLeft: '3%',
              marginBottom: '10px',
              width: '100px',
              padding: '6px',
              backgroundColor: '#007bff',
              borderRadius: '7px',
              border: '1px solid black',
              color: '#fff',
              cursor: 'pointer',
              fontSize: '.85rem',
            }}
          >
            Edit Post
          </button>
        </Link>
        {/* <br style={{ marginBottom: '15px' }} /> */}
        <button
          style={{
            marginLeft: '1%',
            width: '100px',
            padding: '6px',
            backgroundColor: '#dc3545',
            borderRadius: '7px',
            border: '1px solid black',
            color: '#fff',
            cursor: 'pointer',
            fontSize: '.85rem',
          }}
          onClick={async () => {
            const response = await fetch(
              'http://localhost:3000/api/posts/' + post._id,
              {
                method: 'DELETE',
                headers: {
                  'Content-Type': 'application/json',
                },
              }
            ).then((result) => {
              router.push('/posts');
            });
          }}
        >
          Delete Post
        </button>
      </div>
    </div>
  );
};

export default Post;

export const getStaticProps: GetStaticProps = async (context: any) => {
  const { id } = context.params;

  const res = await fetch('http://localhost:3000/api/posts/' + id);
  const data = await res.json();

  return {
    props: { data },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch('http://localhost:3000/api/posts');
  const data = await res.json();
  const posts = data['data'];

  const paths = posts.map((post: any) => ({
    params: { id: post._id },
  }));

  return { paths, fallback: false };
};
