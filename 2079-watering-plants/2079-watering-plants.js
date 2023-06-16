/**
 * @param {number[]} plants
 * @param {number} capacity
 * @return {number}
 */
var wateringPlants = function(plants, capacity) {
      let steps = 0;
  let water = 0;
  
  for (let i = 0; i < plants.length; i++) {
    if (water < plants[i]) {
      steps += (i * 2);
      water = capacity;
    }
    
    water -= plants[i];
  }
  
  return steps + plants.length;
};