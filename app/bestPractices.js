/* eslint-disable */
exports = typeof window === "undefined" ? global : window;

/**
 * This file defines an object with some methods. Some of these methods are
 * populated incorrectly; your job is to fix them. Other methods are not
 * populated at all; your job is to fill them out.
 */

exports.bestPracticesAnswers = {
  /**
   * Avoid global variables
   * @description Now myObject is a window variable
   */
  globals: () => {
    var myObject = {
      name: "Jory",
    };

    return myObject;
  },

  /**
   * ParseInt correctly
   * @param {String} str
   */
  parseInt: (str) => parseInt(str, 10),

  /**
   * Number correctly
   * @param {String} str
   */
  Number: (str) => Number(str),

  /**
   * Understand strict comparison
   * @param {Number} val1
   * @param {String | Number | Boolean} val2
   */
  identity: (val1, val2) => val1 === val2,
};
