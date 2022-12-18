/**
 * Performs the merge sort algorithm on an array of numbers
 * @param {BinaryTree} tree - A tree to represent the steps of the algorithm
 * @param {int[]} arr - The array of numbers
 * @param {string[]} keys - An array of all of the keys in the BinaryTree
 * @returns {int[]} arr - The sorted array
 */
function mergeSort(tree, arr, keys = null, parentKey = 0, depth = 0) {
  // If this is being called for the first time (keys will be null) populate the 2D keys array with an empty array for each row of the tree (by calculating max depth)
  if (!keys) {
    keys = [];

    let maxDepth = Math.ceil(Math.log(arr.length) / Math.log(2)); // Finds the max depth of the tree

    for (i = 0; i < maxDepth; i++) {
      keys.push([]);
    }
  }

  // Gets the length of half the array (rounding up)
  const half = Math.ceil(arr.length / 2);

  // BASE CASE: return the sorted array
  if (arr.length < 2) return arr;

  // Left side of the array, right side will be stored in "arr" since splice removes these values from original arr
  const left = arr.splice(0, half);

  // Sets the key for the left side of the array, and inserts it into the tree
  const leftKey = (depth + 1).toString() + `-` + keys[depth].length;
  tree.insert(parentKey, leftKey, [...left]);

  let curKey = keys[depth].length;
  keys[depth].push(curKey);

  // Sets the key for the right side of the array, and inserts it into the tree
  const rightKey = (depth + 1).toString() + `-` + keys[depth].length;
  tree.insert(parentKey, rightKey, [...arr]);

  curKey = keys[depth].length;
  keys[depth].push(curKey);

  return (
    mergeSort(tree, left, keys, leftKey, depth + 1),
    mergeSort(tree, arr, keys, rightKey, depth + 1)
  );
}
