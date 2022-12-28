import { Header } from './Header';
import styles from './index.module.scss';

export const Layout = () => {
  return (
    <div id={styles.pageContainer}>
      <Header />
    </div>
  );
};
