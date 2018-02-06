const https = require('https');

/**
 * This function run the Integration Test against UAT.
 * It calls to the Ghost Inspector's API.
 *
 */
function runIntegrationTestUAT() {

  const testSuiteId = process.env.GHOST_INSPECTOR_SUITE_ID;

  const apiKey = process.env.GHOST_INSPECTOR_API_KEY;

  const ERROR_MESSAGE = 'TEST ERROR!!!';

  const EMPTY_STRING = '';

  const HTTPS_DATA_EVENT = 'data';

  const HTTPS_END_EVENT = 'end';

  const HTTPS_ERROR_EVENT = 'error';

  const GHOST_INSPECTOR_URL = `https://api.ghostinspector.com/v1/suites/${testSuiteId}/execute/?apiKey=${apiKey}`;

  console.log('#### Calling Ghost Inspector API');
  console.log(`Ghost Inspector url: ${GHOST_INSPECTOR_URL}`);

  https.get(GHOST_INSPECTOR_URL, (resp) => {
    let data = EMPTY_STRING;

    // A chunk of data has been recieved.
    resp.on(HTTPS_DATA_EVENT, (chunk) => {
      data += chunk;
    });

    resp.on(HTTPS_END_EVENT, () => {
      const bodyResponse = JSON.parse(data);
      if (bodyResponse.data[0].passing === false) {
        console.log('#### Test fail');
        throw ERROR_MESSAGE;
      } else {
        console.log('#### Test completed successfully');
      }
    });
  }).on(HTTPS_ERROR_EVENT, (err) => {
    console.log(`Error: ${err.message}`);
    console.log('#### Test completed successfully');
  });
}


runIntegrationTestUAT();
