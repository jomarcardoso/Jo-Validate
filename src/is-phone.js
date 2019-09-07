/**
 * @param {string}
 * @return {boolean}
 */
export function isPhone({ length } = '') {
  return (length === 11 || length === 10);
}