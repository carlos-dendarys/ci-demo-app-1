
const userServices = require('../src/services/UserService');

describe('Tests', async () => {

  it('Test 1', async () => {

    let requestMock = {
      query: {
        username: 'cad1',
        email: 'cad@email.com'
      }
    };

    let responseMock = {
      render: function (view, data) {
        expect(view).toEqual('userdetails');
        expect(data.username).toEqual('cad');
        expect(data.useremail).toEqual('cad@email.com');
      }
    };
    userServices.userDetails(requestMock, responseMock);
  });

});