/**
 * @param {string} string
 * @returns {boolean}
 */
export function isEmail(string) {
  return new RegExp(/^([\w_.\-+])+@([\w-]+.)+([\w]{2,10})+$/).test(string);
}