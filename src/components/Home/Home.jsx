import { InputControl } from '../FormControls/FormControl';
import styles from './Home.css';

export default function Home() {
  return <div className={styles.Home}>
    <form>
      <InputControl
        label="Name"
        name="name"
        placeholder="your name"
      />
    </form>
  </div>;
}
