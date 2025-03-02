// 1. Convert a Roman Numeral to an Integer

// const roman = (roman)=>{
//     const obj = {'I':1, 'V':5, 'X':10, 'L': 50, 'C':100, 'D': 500, 'M':1000};
//     var total =  0
//     for(var i=0;i<roman.length;i++){ //2
//         current = obj[roman[i]] // obj[1]
//         next = obj[roman[i+1]]  // obj[1]

//         if(next>current){ //1 > 10 == false //1>1 ==false
//             total -= current //0=0 - 10
//         }
//         else{
//             total +=current //10 =10+1 //1
//         }
//     }
//     console.log(total)//10
// }
// roman("XII")

// 2. Move All Zeros to the End of an Array

// const zero = (arr)=>{
//     var arr2= []
//     var arr3 =[]
//     for(var i=0;i<arr.length;i++){
//         if(arr[i]==0){
//             arr2.push(arr[i])
//           }   
//         if(arr[i]!=0){
//             arr3.push(arr[i])
//         }
//     }
//     arr3.push(...arr2)
//     console.log(arr3)
// }
// zero([1,2,0,0,5])

// 3. Generate All Substrings of a Given String

// const substring = (str) => {
//     var substring = []
//     for (var i = 0; i < str.length; i++) {
//         var tempstr = ""
//         for (var j = i; j < str.length; j++) {
//             tempstr += str[j]
//             substring.push(tempstr)
//         }
//     }
//     console.log(substring)
// }
// substring("dog")