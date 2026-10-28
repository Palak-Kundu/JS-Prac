let setA = new Set([1, 2, 3, 4]);
let setB = new Set([3, 4, 5, 6]);

// Union
let union = new Set([...setA, ...setB]);
console.log("Union:", union);

// Intersection
let intersection = new Set([...setA].filter(x => setB.has(x)));
console.log("Intersection:", intersection);

// Difference (A - B)
let difference = new Set([...setA].filter(x => !setB.has(x)));
console.log("Difference (A - B):", difference);
