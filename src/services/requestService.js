/**
 * Manage data using external URL
 *
 * @param {String} url
 * @param {String} method
 * @param {Object} requestData
 * @returns {Promise}
 */
export const requester = (url, method, requestData) => new Promise((resolve, reject) => {
  const options = {
    method,
  };

  switch (method) {
    case 'POST':
      options.headers = {
        'Content-Type': 'application/json',
      };
      options.body = JSON.stringify(requestData);
      break;
    case 'PUT':
      options.headers = {
        'Content-Type': 'application/json',
      };
      options.body = JSON.stringify(requestData);
      break;
    default:
      break;
  }

  fetch(url, options)
    .then(response => response.json())
    .then(data => {
      resolve(data);
    })
    .catch(error => {
      reject(error);
    });
});
