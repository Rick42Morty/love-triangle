/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
  var counter = 0;
  for (i=0; i < preferences.length; i++){
    if((preferences[preferences[preferences[i] - 1] - 1] === i + 1) && (preferences[i] != i+1)){
      counter += 1;
    }
  }

  return counter/3;
};
