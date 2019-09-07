/**
 * @param {string} string
 * @returns {boolean}
 */
export function isDate(string) {
  // TODO: no momento não valida se o dia existe
  return (String(new Date(string)) !== 'Invalid Date');
}