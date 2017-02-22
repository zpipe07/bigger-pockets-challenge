/**
 * Utility methods
 * @type {Object}
 */
const utils = {
  /**
   * Find the index for the object with the given key-value pair
   * @param  {array}  array - array of object to search
   * @param  {string} attr  - attribute to search
   * @param  {string} value - value of attribute to find
   * @return {number}       - index of object or -1
   */
  findWithAttr(array, attr, value) {
    for (let i = 0; i < array.length; i += 1) {
      if(array[i][attr] === value) {
        return i;
      }
    }
    return -1;
  },
};

export default utils;
