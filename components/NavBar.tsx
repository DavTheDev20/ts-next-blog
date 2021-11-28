import Link from 'next/link';
import styles from './NavBar.module.css';

const NavBar = () => {
  return (
    <nav className={styles.container}>
      <h3 className="nav-logo">
        <Link href="/">Tech Blog</Link>
      </h3>
      <ul className={styles['nav-links']}>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/posts">Posts</Link>
        </li>
        <li>
          <Link href="/create">Create</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
