import type { NextPage } from 'next';
import Jumbotron from '../components/Jumbotron';

const contentAreaStyles = {
  display: 'flex',
  justifyContent: 'space-around',
  marginTop: '7%',
};

const Home: NextPage = () => {
  return (
    <div className="Home">
      <Jumbotron content="Home" />
      <div className="content-area" style={contentAreaStyles}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            fontSize: '1.15rem',
          }}
        >
          <h2 style={{ width: '15%', textAlign: 'right', margin: '0 1.5%' }}>
            Welcome to the Next Typescript Blog
          </h2>
          <p style={{ width: '25%' }}>
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
