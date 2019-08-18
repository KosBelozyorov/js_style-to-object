'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes string with styles
 * and returns object where CSS properties are keys
 * and values are the values of related CSS properties

 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const objectResult = {};
  const inputString = sourceString.split(';');
  for (let i = 0; i < inputString.length; i += 1) {
    inputString[i] = inputString[i].split(':');
    for (let j = 0; j < inputString[i].length; j += 1) {
      inputString[i][j] = inputString[i][j].trim();
    }
  }
  inputString.pop();

  for (let i = 0; i < inputString.length; i += 1) {
    objectResult[inputString[i][0]] = inputString[i][1];
  }

  return objectResult;
}

module.exports = convertToObject;
