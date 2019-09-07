/**
 * @param {string} value
 * @param {Object} options
 * @param {string} options.min
 * @param {string} options.max
 * @returns {boolean}
 */
export function isDateBetween(value, { min, max } = {}) {
  const date = isDate(value) ? value : new Date(value);
  if (min && (date < min)) return false;
  if (max && (max < date)) return false;
  return true;
}