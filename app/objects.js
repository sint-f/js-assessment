exports = typeof window === "undefined" ? global : window;

const cat = {
  name: "Bertie",
  breed: "Cymric",
  color: "white",
};

exports.cat = cat;

exports.objectsAnswers = {
  /**
   * Return the cat name
   */
  name: () => {},

  /**
   * Return the changed cat name
   * @param {String} name
   */
  changeName: (name) => {},

  /**
   * Add a key/value to the object
   * @param {String} key
   * @param {String} value
   */
  add: (key, value) => {},
};
