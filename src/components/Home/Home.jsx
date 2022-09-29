import { CheckboxControl, InputControl, SelectControl, TextAreaControl } 
  from '../FormControls/FormControl';
import styles from './Home.css';

export default function Home() {
  return <div className={styles.Home}>
    <form>
      <InputControl
        label="Name"
        name="name"
        placeholder="your name"
      />

      <TextAreaControl
        label="Who are you?"
        name="bio"
        placeholder="tell us more"
      />

      <SelectControl
        label="color"
        required
        name="color"
        placeholder="Favorite color?">
        <option value="blue">Blue</option>
        <option value="yellow">Yellow</option>
        <option value="pink">Pink</option>
        <option value="purple">Purple</option>
        <option value="green">Green</option>
      </SelectControl>

      <CheckboxControl legend="Agreed?" label="yes" />
    </form>
  </div>;
}
