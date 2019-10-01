import DataFormService from './DataFormService.js';

describe('text 2', () => {
  it('try1', async () => {
    let name = await DataFormService.try1();
    expect(name.length).toBeGreaterThan(3);
  })
})



// ------------------------------------------------------------
// --detectOpenHandles IN package.json ORRRR THIS:

// afterAll(async done => {
//   // Closing the DB connection allows Jest to exit successfully.
//   done();
// });