import { render, screen } from '@testing-library/react';
import { InputControl, SelectControl, TextAreaControl } from './FormControl';

test('Input Control', async () => {
  render(
    <InputControl
      label="Name"
      name="name"
      required
      placeholder="your name"
    />
  );

  const inputControl = screen.getByLabelText('Name');
  expect(inputControl.name).toBe('name');
  expect(inputControl.placeholder).toBe('your name');
  expect(inputControl.required).toBe(true);
});

test('Text Area Control', async () => {
  render(
    <TextAreaControl
      label="Who are you?"
      name="bio"
      required
      placeholder="tell us more"
    />
  );

  const textAreaControl = screen.getByLabelText('Who are you?');
  expect(textAreaControl.name).toBe('bio');
  expect(textAreaControl.required).toBe(true);
  expect(textAreaControl.placeholder).toBe('tell us more');
});

test('Select Control', async () => {
  render(
    <SelectControl label="color" name="color" required>
      <option>Blue</option>
      <option>Yellow</option>
      <option>Pink</option>
      <option>Purple</option>
      <option>Green</option>
    </SelectControl>
  );
  
  const selectControl = screen.getByLabelText('color');
  expect(selectControl.name).toBe('color');
  expect(selectControl.required).toBe(true);
  expect(selectControl.options.length).toBe(5);
});
