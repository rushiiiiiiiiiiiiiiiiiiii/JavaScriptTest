// //1. swap two numbers without using a third variable
// const swap = (a,b)=>{var a= 5
// b=a
// console.log("b is", b )
// var a=5
// var b=10
// a=b
// console.log("a is", a)
// }


// swap(5,10)
// //2. Find the largest of three  numbers
// var num1=1
// var num2=2
// var num3=2
// const largest = (num1,num2,num3)=>{
// if(num1>num2&&num1>num3){
//     console.log(num1, "is largest number")
// }
// else if(num2>num1&&num2>num3){
//     console.log(num2, "is largest number")
// }
// else{
//     console.log(num3, "is largest number")
// }
// }
// largest(num1,num2,num3)

// //3. Check if number is prime
// const prime = (num)=>{
//  var isprime = false
//     if(num <2){
//         isprime = false
//     }
//     for(var i=2;i<num;i++){
//         if(num==i){
//             isprime = false
//         }
//     }
//     isprime= true
//     console.log(num, "is prime",isprime)
// }
// prime(4)

// //4. Reverse an array without using built in function

// const reverse = (arr)=>{
//     var revarr =  []
//     for(var i=arr.length-1; i>0;i--){
//       revarr[arr.length-i-1] =arr[i]  
//     }
//     console.log(revarr)
    
// }
// var arr = [2,3,67,34,12]
// reverse(arr)

// //5. sum of even numbers in array
// const evensum = (arr)=>{
//     var sum =0
//   for(var i=0;i<arr.length;i++)
//     if(arr[i]%2==0){
//         sum = sum+ arr[i]
//     }
//     console.log(sum)
// }
// var arr= [2,4,6,8,1,5 ]
// evensum(arr)

// //6. count the number of owels in a string
// const owel = ()=>{
//     var count = 0
//    var char = str.toLowerCase()
//    console.log(char)
//    for(var i =0; i<char.length;i++){
//     if(char[i]=="a"||char[i]=="e"||char[i]=="i"||char[i]=="o"||char[i]=="u"){
//         count++
//     }
//    }
//    console.log(count)
// }
// var str = "This is javascript"
// owel(str)

// //9. Find Factorial of number
// const fact = (num)=>{
//     var fact=1 
//    for(var i =1;i<=num;i++){ 
//     fact = fact * i
//    }
//    console.log(fact)
// }
// var num =5
// fact(num)

// //10. check if an array is sorted 1 2 3 4 2
// var oldarr = arr

// const sort  = (arr)=>{  
//    for(var i=0; i<arr.length-1;i++){
//      for(var j=0; j<arr.length -i -1; j++){
//         if(arr[j]>arr[j+1]){
//             let temp = arr[j]
//             arr[j]= arr[j+1]
//             arr[j+1] = temp
//         }
//      }
//    }
//    if(arr==oldarr){
//     console.log(arr, "is sorted")
//    }
//    else{
//     console.log(arr,"is not sorted")
//    }
// }
// var arr = [2,1,3,45,5]
// sort(arr)


// //9.largest in array

// const seclarge = ()=>{
// var large = arr[0]
// var seclarge 
// for(var i=0;i<arr.length;i++){
//     if(arr[i]>large)
//     {
//         large  = arr[i]
//     }
//     else if(arr[i]<large){
//         seclarge = arr[i]
//     }
// } 
// console.log(large)
// console.log(seclarge)
// }
// var arr = [1,2,,5,45,6,8]
// seclarge(arr)


//8. remove duplicate elements from array
const dupli = (arr)=>{
   var oldarray = []
   for(var i=0; i<arr.length;i++){ 
     if(arr[i]!=arr[i+1]){
        oldarray.push(arr[i])
     }
   }
   return oldarray

}
var arr = [1,2,3,3,4,5,5]
const duplicate = dupli(arr)
console.log(duplicate)
