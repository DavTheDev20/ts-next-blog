import { GetStaticProps, GetStaticPaths } from 'next';
import Jumbotron from '../../components/Jumbotron';
import Link from 'next/link';

const Post = (props: any) => {
  const post = props.data;
  return (
    <div>
      <Jumbotron content={post.title} />
      <p style={{ margin: '2% 3% 1%', width: '65%', lineHeight: '1.5' }}>
        {post.content}
      </p>
      <small style={{ marginLeft: '3%', fontWeight: '600' }}>
        Posted On: {post.dateCreated.slice(0, 10)}
      </small>
      <br />
      <Link href={'/posts/edit/' + post._id}>
        <a href="#" style={{ marginLeft: '3%' }}>
          Edit Post
        </a>
      </Link>
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
