// https://jestjs.io/docs/en/tutorial-async
// __tests__/user-test.js

var user = require('../controller/user');

// async/await can be used.
it('Get All Users', async () => {
    // expect.assertions(1);
    const data_str = await user.getAll();
    const data_json = JSON.parse(data_str)

    //unit testing
    expect(data_json.status).toEqual('Success')

    // Uncomment to see failure
    // expect(data_json.message).toEqual('Banana')
  });
