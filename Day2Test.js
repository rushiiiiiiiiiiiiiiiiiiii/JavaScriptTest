// 1. Multiply Two Numbers Without Using * Operator

// var multiply = (num1,num2)=>{
//     var sum=0
//   for(var i=1;i<=num2;i++){
//     console.log(num1)
//     sum = sum+num1
//   }
// //   console.log(sum)
// }
// var num1 = 2
// var num2 = 4
// multiply(num1,num2)


// 2. Find the Smallest of Three Numbers

// function findSmallest(a, b, c) {
//     if (a < b && a < c) {
//         console.log(a, " is smallest")
//     }
//     else if (b < a && b < c) {
//         console.log(b, " is smallest")
//     }
//     else {
//         console.log(c, "is smallest")
//     }
// }
// findSmallest(3, 7, 5)

//3. Reverse a String Without Using Built-in Methods

// function reverseString(str) {
//     for (var i = str.length; i >= 0; i--)
//         console.log(str[i])
// }
// var str = "hello"
// reverseString(str)

// 4. Count the Occurrences of Each Character in a String
// console.log(str[i])
            // console.log(str[i].length)
// // Count the Occurrences of Each Character in a String
// function charCount(str) {
//     var count = 0
//     for (var i = 0; i < str.length; i++) {
//         if (str[i] == str[i]) {
//             count++
//             console.log(str[i])
//             console.log(str[i].length)
//         }
//     }

// }
// var str = "hello"
// charCount(str)


// function charCount(str) {
//     let countObj = {}; // Object to store character occurrences

//     for (let i = 0; i < str.length; i++) {
//         let char = str[i];

//         if (countObj[char]) {
//             countObj[char]++; // Increment count if character already exists
//             console.log(countObj[char]++)
//         } else {
//             countObj[char] = 1; // Initialize count
//         }
//         // console.log(countObj[char])
    // }

//    console.log(countObj) 
// }

// var str = "helloh";
// charCount(str)


// 5. Find the Intersection of Two Arrays

// function arrayIntersection(arr1, arr2) {
//     var interaction =[]
//     for(var i=0;i<arr1.length;i++){
//         for(var j=0;j<arr2.length;j++){
//             if(arr1[i]==arr2[j]){
//                 interaction.push(arr1[i])
//             }
//         }

//     }
//     console.log(interaction)

//     }
//     var arr1  = [1,2,4,5,6]
//     var arr2  = [12,9,4,5,23]
//     arrayIntersection(arr1,arr2)