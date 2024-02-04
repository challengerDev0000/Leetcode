/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
function minWindow (base, target) {
  let left = 0;
  const map = new Map();
  for (const char of target) {
    map.set(char, (map.get(char) || 0) + 1);
  }
  let zeroCounter = 0;
  let k1;
  let k2;
  let min = Infinity;
  for (let right = 0; right < base.length; right++) {
    const char = base[right];
    if (map.has(char)) {
      const val = map.get(char) - 1;
      map.set(char, val);
      if (val === 0) {
        zeroCounter++;
        while (zeroCounter === map.size) {
          const char = base[left];
          if (map.has(char)) {
            const val = map.get(char) + 1;
            if (val === 1) {
              zeroCounter--;
              if (right - left < min) {
                min = right - left + 1;
                k1 = left;
                k2 = right;
              }
            }
            map.set(char, val);
          }
          left++;
        }
      }
    }
  }
  return base.slice(k1, k2 + 1)
}