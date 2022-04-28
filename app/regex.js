exports = typeof window === "undefined" ? global : window;

exports.regexAnswers = {
  /**
   * Detect a number in a string
   * @param {String} str
   */
  containsNumber: (str) => {},

  /**
   * Determine whether a string matches a pattern
   *
   * The pattern is XXX-XXX-XXXX where all X's are digits
   * @param {String} str
   */
  matchesPattern: (str) => {},
};
