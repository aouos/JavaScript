/*
 * @Author: GJQ 
 * @Date: 2020-12-17 11:38:25 
 * @Last Modified by: aouos
 * @Last Modified time: 2021-01-21 21:01:13
 */

// Map.prototype.forEach(callback([value][,key][,map])[, thisArg])

const map = new Map();

map.set('name', 'aouos');
map.set('age', 22);
map.set('height', undefined);
// Map { 'name' => 'aouos', 'age' => 22, 'height' => 185 }

map.forEach((value, key, map) => {
  console.log(key, value);
})
// name aouos
// age 22
// height undefined