console.log('****** Array Practice *******');

// 1. Creating arrays
console.log('--- 1. Practice creating arrays ---');

// Example: Array of animals
let animalArray = ['fish', 'cat', 'bird', 'dog'];
console.log('Animals are: ', animalArray);

let favoriteFoodsArray = ['spaghetti', 'sushi', 'shrimp fried rice', 'spinach curry', 'mushroom cheeseburger and fries'];

// 1.b. TODO: Log your array of foods to the console with a message, similar
//      to the example above

console.log('Favorite Foods are: ', favoriteFoodsArray);

// 2. Array.length - tells you how many items are in the array
console.log('--- 2. Length of an array ---');

// Example: How many animals are in the array?
console.log('Number of animals:', animalArray.length);

// 2.a. TODO: Log to the console the number of foods in your array
console.log('Number of Favorite Foods:', favoriteFoodsArray.length);

// 3. Accessing array items
console.log('--- 3. Accessing items in an array ---');

// Example: Log the first animal from the array using it's array index
console.log('First animal is', animalArray[0])

// 3.a. TODO: Log the second animal in the array
console.log('Second animal is', animalArray[1])

// 3.b. TODO: Log the last animal in the array using it's array index

console.log('Last animal is', animalArray[3])
// 3.c. (STRETCH) TODO: Log the last animal by using the array length,
//      instead of the exact index number of the last item
let lastElement = animalArray[animalArray.length -1];
console.log('Last animal is', lastElement);

// 4. Adding & Removing Array Items
console.log('--- 4. Adding and removing array items ---');

// Example: Add an animal to the end using Array.push
animalArray.push('penguin');
console.log('Added an animal to end,', animalArray);

// 4.a. TODO: Add a new food at the end of your array & log the array
favoriteFoodsArray.push('popcorn');
console.log('Added a food to end', favoriteFoodsArray);


// Example: Remove the last animal by using Array.pop
let removedAnimal = animalArray.pop();
console.log('Removed the last animal', removedAnimal);
console.log('The animals are now', animalArray);

// 4.b. TODO: Remove the food at the end of your array &
//      log both the food removed and the updated array
let removedFood = favoriteFoodsArray.pop();
console.log('Removed the last food', removedFood);
console.log('The favorite foods are now', favoriteFoodsArray);

// Example: Add an animal to the beginning using Array.unshift
animalArray.unshift('walrus');
console.log(`Added an animal to beginning: ${animalArray}`);

// 4.c. TODO: Add a food at the beginning of the array & log the array
favoriteFoodsArray.unshift('cake');
console.log(`Added a food to beginning: ${favoriteFoodsArray}`);
// Example: Remove the first animal using Array.shift
removedAnimal = animalArray.shift();
console.log('Removed the first animal', removedAnimal);
console.log('The animals are now', animalArray);

// 4.d TODO: Remove the food at the beginning of your array &
//     log both the food removed and the updated array
removedFood = favoriteFoodsArray.shift();
console.log('Removed the first food', removedFood);
console.log('The favorite fooods are now', favoriteFoodsArray);
