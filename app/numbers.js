exports = typeof window === "undefined" ? global : window;

exports.numbersAnswers = {
  /**
   * Round a number to the nearest integer
   * @param {Number} num
   */
  round: (num) => {},

  /**
   * Round a number to the next largest integer
   * @param {Number} num
   */
  ceil: (num) => {},

  /**
   * Round a number to thelargest integer less than or equal to a given number
   * @param {Number} num
   */
  floor: (num) => {},

  /**
   * Find the highest-valued number
   * @param {Number} a
   * @param {Number} b
   */
  max: (a, b) => {},

  /**
   * Find the lowest-valued number
   * @param {Number} a
   * @param {Number} b
   */
  min: (a, b) => {},
};
