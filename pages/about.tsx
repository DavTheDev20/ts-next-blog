import type { NextPage } from 'next';
import Jumbotron from '../components/Jumbotron';

const About: NextPage = () => {
  return (
    <div>
      <Jumbotron content="About" />
      <div style={{ margin: '3%' }}>
        <a href="/download.pdf" target="_blank">
          Download File
        </a>
      </div>
    </div>
  );
};

export default About;
