import React from 'react';
import renderer from 'react-test-renderer';
import App from './App';


// This is great for when you want to track UI changes
// When you are passing around code for other developers
test('App snapshot test', () => {

  const component = renderer.create(<App />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
