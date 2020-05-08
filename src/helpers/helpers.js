/**
 * Parse data before sending to db
 *
 * @param {Object} data
 * @return {Object}
 */
export const parseData = data => ({
  full_name: data.full_name,
  description: data.description,
  avatar_url: data.avatar_url,
  type: data.type.id,
});

export const debounce = (func, delay) => {
  let isDebounce;

  return (...args) => {
    clearTimeout(isDebounce);
    isDebounce = setTimeout(() => func.apply(this, args), delay);
  };
};
