import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import Jumbotron from '../../../components/Jumbotron';
import { useState } from 'react';

const Edit: NextPage = (props: any) => {
  const router = useRouter();
  const { id } = router.query;

  const labelStyle = {
    fontSize: '1.5rem',
  };

  const [postVals, setPostVals] = useState({
    title: props.post.title,
    content: props.post.content,
  });

  const handleSubmission = async (event: any) => {
    event.preventDefault();

    if (!postVals.title || !postVals.content) {
      alert('Please enter values in both inputs');
      return;
    }

    const response = await fetch('http://localhost:3000/api/posts/' + id, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postVals),
    });

    const data = await response.json();

    if (data.success === 'false') {
      alert('error submitting post.');
      return;
    } else {
      router.push('/posts');
    }
  };

  return (
    <div>
      <Jumbotron content="Edit Post" />
      <form style={{ margin: '2%' }} onSubmit={handleSubmission}>
        <label style={labelStyle}>Title</label>
        <br />
        <input
          type="text"
          name="title"
          style={{
            width: '300px',
            padding: '2px',
            height: '32.5px',
            borderRadius: '10px',
            border: '1px solid black',
            fontSize: '1.1rem',
            margin: '5px 0',
          }}
          value={postVals.title}
          onChange={(event) =>
            setPostVals((prevValue) => {
              return {
                title: event.target.value,
                content: prevValue.content,
              };
            })
          }
        />
        <br />
        <label style={labelStyle}>Content</label>
        <br />
        <textarea
          name="content"
          style={{
            width: '400px',
            height: '200px',
            borderRadius: '10px',
            border: '1px solid black',
            padding: '2px',
            fontSize: '1.1rem',
            margin: '5px 0',
          }}
          value={postVals.content}
          onChange={(event) => {
            setPostVals((prevValue) => {
              return {
                title: prevValue.title,
                content: event.target.value,
              };
            });
          }}
        ></textarea>
        <br />
        <button
          style={{
            padding: '10px',
            width: '100px',
            margin: '5px 0',
            fontSize: '1.02rem',
            borderRadius: '10px',
            cursor: 'pointer',
          }}
        >
          Edit
        </button>
      </form>
    </div>
  );
};

export default Edit;

export const getStaticProps = async (context: any) => {
  const { id } = context.params;

  const res = await fetch('http://localhost:3000/api/posts/' + id, {
    method: 'GET',
  });
  const data = await res.json();

  const post = data;

  return {
    props: { post },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch('http://localhost:3000/api/posts');
  const data = await res.json();
  const posts = data.data;

  const paths = posts.map((post: any) => ({
    params: { id: post._id },
  }));

  return { paths, fallback: false };
};
