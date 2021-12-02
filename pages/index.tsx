import type { NextPage } from 'next';
import Jumbotron from '../components/Jumbotron';

const Home: NextPage = () => {
  return (
    <div className="Home">
      <Jumbotron content="Home" />
      <div className="content-area">
        <div className="content-area-text">
          <h2>Welcome to the Next Typescript Blog</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis
            cumque natus, perspiciatis veritatis non ad quasi assumenda,
            blanditiis iure ea quidem fugiat sed eos debitis. Dolorum itaque
            tempore mollitia magnam.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
