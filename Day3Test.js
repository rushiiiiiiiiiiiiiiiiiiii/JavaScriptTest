//1. Find a number in array
var nums = [1,2,3,4,5,6]
var target = 6

const binarysearch = (nums, target) => {
    let left = 0;
    let right = nums.length - 1;  

    while (left <= right) {
        let midindex = Math.floor((left + right) / 2); 
        let midele = nums[midindex]; 

        if (midele === target) {
            return "Element found at index " + midindex;
        } 
        else if (target < midele) {
            right = midindex - 1; 
        } 
        else {
            left = midindex + 1; 
        }
    }
    return "Not found";
};
console.log(binarysearch(nums,target));



//2. Find the Second Smallest Number in an array withour sorting the array

var num = [4,3,6,2,8]

function secondSmallest(num) {
    let smallest = Infinity;
    let secondSmallest = Infinity;

    for (let i = 0; i < num.length; i++) {
        if (num[i] < smallest) {
            secondSmallest = smallest; 
            smallest = num[i]; 
        } else if (num[i] < secondSmallest && num[i] !== smallest) {
            secondSmallest = num[i]; 
        }
    }
    return secondSmallest === Infinity ? null : secondSmallest;
}
console.log(secondSmallest(num))

//3. Reverse Words in a Sentence Without Using Built-in Methods

function reverseWords(sentence) {
    let reversedSentence = "";
    let word = "";

    for (let i = 0; i <= sentence.length; i++) {
        if (i === sentence.length || sentence[i] === " ") {
            for (let j = word.length - 1; j >= 0; j--) {
                reversedSentence += word[j];
            }
            if (i !== sentence.length) reversedSentence += " "; 
            word = ""; 
        } else {
            word += sentence[i];
        }
    }
    return "Reversed Strig is: "+ reversedSentence;
}
var sentence = "hello world"
console.log(reverseWords(sentence));  


//4.  Find the Missing Number in an Array

function findMissingNumber(arr) {

    for (var num = 0; num < arr.length; num++) {
        if (arr[num] != arr[num + 1] - 1) {
            console.log(arr[num] + 1)
            break;
        }
    }
}
var arr = [0, 2, 3, 4, 5]
console.log(findMissingNumber(arr));



//5.  Implement a String Compression Algorithm

function compressString(str) {

    let compressed = "";
    let count = 1;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i + 1]) {
            count++; 
        } else {
            compressed += str[i] + count; 
            count = 1; 
        }
    }

    return compressed;
}
var str = "aaabbcddd"
console.log(compressString(str))

