/**
 * @param {*} any
 * @return {boolean}
 * @description "isNumber" say more than typeof any === 'number'"
 */
export function isNumber(any) {
  return Number.isInteger(any);
}