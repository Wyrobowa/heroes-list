/**
 * Manage data using external URL
 *
 * @param {String} url
 * @param {String} method
 * @param {Object} requestData
 * @returns {Promise}
 */
export const requester = (url, method, requestData = {}) => new Promise((resolve, reject) => {
  const options = {
    method,
  };

  if (method === 'POST' || method === 'PUT') {
    options.headers = {
      'Content-Type': 'application/json',
    };
    options.body = JSON.stringify(requestData);
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
