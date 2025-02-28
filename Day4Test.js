// 1. Find the Third Largest Number in an Array

const thirdLargest = (arr)=>{
  var maxnum = -Infinity;
  var secmaxnum = -Infinity
  var thirdmaxnum = -Infinity;
  for(var i=0;i<arr.length;i++){
    if(arr[i]>maxnum){
        thirdmaxnum = secmaxnum
        secmaxnum = maxnum
        maxnum=arr[i]
    }
    else if(arr[i]>secmaxnum && arr[i]!=maxnum){
        thirdmaxnum=secmaxnum
        secmaxnum=arr[i]
    }
    else if(arr[i]>thirdmaxnum && arr[i]!=secmaxnum && arr[i]!=maxnum){
        thirdmaxnum=arr[i]
    }
  }
  return thirdmaxnum
}
console.log(thirdLargest([2,5,40,23,56,17,1]))

// 2. Reverse a number

const reverse = (num)=>{   
    var reverse = 0
    while(num>0){
        var last = num % 10
        reverse = reverse * 10 + last
        num = Math.floor(num/10)                   
    }
    console.log(reverse)

}
reverse(1234)


// 3. Check if string is anagram

function isAnagram(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }
    return str1.split("").sort().join() === str2.split("").sort().join()
    
}
console.log(isAnagram("listen", "silent"));

//4. Find the First Non-Repeating Character

const nonrepeat = (str) =>{
    var count = {}
    for(var char of str){
      count[char] = (count[char] || 0)+1
    }
    for(var char of str){
        if(count[char] === 1){
            return char
        }
    }
}
console.log(nonrepeat("hheelllo"))

// 5. Find the Longest Word in a Sentence

const longestwordfind = (str)=>{
    var words = str.split(" ")
    var longest = ""
    for(var word of words){
        if(word.length > longest.length){
            longest = word
        }
    }
    return longest
}
console.log(longestwordfind("Hiii my name is Rushikesh arote"))