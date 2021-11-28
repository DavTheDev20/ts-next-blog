import styles from './Jumbotron.module.css';

const Jumbotron = (props: any) => {
  return (
    <div className={styles.jumbotron}>
      <h1 style={{ marginLeft: '10%', color: '#ffff', fontSize: '2rem' }}>
        {props.content}
      </h1>
    </div>
  );
};

export default Jumbotron;
