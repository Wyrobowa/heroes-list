/**
 * Fetch external data
 *
 * @param {String} url
 * @returns {Promise}
 */
export const fetchData = url => new Promise((resolve, reject) => {
  fetch(url)
    .then(response => response.json())
    .then(data => {
      resolve(data);
    })
    .catch(error => {
      reject(error);
    });
});
