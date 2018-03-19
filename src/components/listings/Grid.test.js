import data from '../../data/courses.json';


describe('Number Tests', () => {
  // Testing Numbers
  const numItems = data.length;

  test('Number of Items = 12', () => {
    expect(numItems).toBe(12);
  });
});


describe('String Tests', () => {
  // Testing Strings
  const dataTest = data[0].title;

  test('There is a JS in this title', () => {
    // match is looking for a JS in the string
    expect(dataTest).toMatch(/JS/);
  });

  test('The title contains React', () => {
    expect(dataTest).toContain('React');
  });


});

describe('Array Test', () => {
  // Testing Arrays
  const data2 = ['React Native', 'MeteorJs'];

  test('The List will contain React Native and MeteorJs', () => {
    expect(['React Native', 'MeteorJs', 'React']).toEqual(expect.arrayContaining(data2));
  });
});



// Testing Objects

describe('Object Test', () => {
  const data3 = data[0];

  test('The first course to have a property of title', () => {
    expect(data3).toHaveProperty('title');
  });


  test('The first course to have a property of title', () => {
    expect(data3).toHaveProperty('views', '31,266');
  });
});










