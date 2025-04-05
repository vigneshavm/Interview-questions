**Remove Duplicates from Array of Objects by**
const data = [  { id: 1, name: "A" },   { id: 1, name: "A" },  { id: 3, name: "C" }];
function removeDuplicates(arr:any) {
  const seen = new Set<number>();
  return arr.filter((item:any) => {
    if (seen.has(item.id)) return false;
    seen.add(item.id);    return true;
  });
}

**Count Frequency of Elements in an Array**
const nums = [1, 2, 2, 3, 1, 4, 2];
function countFrequency(arr: number[]): Record<number, number> {
  const freq: Record<number, number> = {};
  for (const num of arr) {    freq[num] = (freq[num] || 0) + 1;  }
  return freq;
}

**Sort an Array of Objects by a Field**
const users = [  { id: 1, age: 30 },  { id: 2, age: 25 },  { id: 3, age: 35 }];
users.sort((a, b) => a.age - b.age);

**Anagram Checker**
function isAnagram(a: string, b: string): boolean {
  const normalize = (str: string) => str.split('').sort().join('');
  return normalize(a) === normalize(b);
}
console.log(isAnagram("listen", "silent"));  // true
console.log(isAnagram("abc", "def"));        // false

**Grouping Items by Property**
const products = [
  { id: 1, name: "Apple", category: "Fruits" },
  { id: 2, name: "Carrot", category: "Vegetables" },
  { id: 3, name: "Banana", category: "Fruits" },
];

function groupByCategory(products: { id: number; name: string; category: string }[]) {
  return products.reduce((acc, curr) => {
    acc[curr.category] = acc[curr.category] || [];
    acc[curr.category].push(curr);
    return acc;
  }, {} as Record<string, typeof products>);
}
console.log(groupByCategory(products));

**Find First Non-Repeating Character**
function firstNonRepeatingChar(str: string): string | null {
  const count: Record<string, number> = {};
  for (const ch of str) {    count[ch] = (count[ch] || 0) + 1;  }  
  for (const ch of str) {    if (count[ch] === 1) return ch;  }  
  return null;
}console.log(firstNonRepeatingChar("swiss")); // "w"

**Flatten a Nested Array**
function flattenArray(arr: any[]): any[] {
  return arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flattenArray(val) : val), []);
}console.log(flattenArray([1, [2, [3, 4]], 5]));

**Output Order of Asynchronous Code Using var**
for (var i = 0; i < 5; i++) {
  console.log(i);  setTimeout(() => console.log(i), 0);
} 
Output - 0  1  2  3  4  5  5  5  5  5

Use let (block scope)
for (let i = 0; i < 5; i++) {
  console.log(i);  setTimeout(() => console.log(i), 0);
}
Output - 0  1  2  3  4  0  1  2  3  4

Use a closure with IIFE
for (var i = 0; i < 5; i++) {
  (function(i) {    setTimeout(() => console.log(i), 0);  })(i);
}

