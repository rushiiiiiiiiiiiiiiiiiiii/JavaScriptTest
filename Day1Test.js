// 1. swap two numbers without using a third variable

// const swap = (a,b)=>{
// b=a
// console.log("b is", b )
// var a=5
// var b=10
// a=b
// console.log("a is", a)
// }
// swap(5,10)
// swap(5,10)

// 2. Find the largest of three  numbers

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

// 3. Check if number is prime

// const prime = (num)=>{
//  var isprime = false
//     if(num < 2){
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

// 4. Reverse an array without using built in function

// const reverse = (arr)=>{
//     var revarr =  []
//     for(var i=arr.length-1; i>0;i--){
//       revarr[arr.length-i-1] =arr[i]  
//     }
//     console.log(revarr)

// }
// var arr = [2,3,67,34,12]
// reverse(arr)

// 5. sum of even numbers in array

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

// 6. count the number of owels in a string

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

// 9. Find Factorial of number

// const fact = (num)=>{
//     var fact=1 
//    for(var i =1;i<=num;i++){ 
//     fact = fact * i
//    }
//    console.log(fact)
// }
// var num =5
// fact(num)

// 8. remove duplicate elements from array

// const dupli = (arr) => {
//    let oldarray = [];
//    for (let i = 0; i < arr.length; i++) { 
//       if (!oldarray.includes(arr[i])) { // Check if element is already added
//          oldarray.push(arr[i]);
//       }
//    }
//    console.log(oldarray);
// }

// let arr = [3,1, 2, 3, 3, 4, 5, 5];
// dupli(arr);

// 9.Second largest in array

// const large = (arr)=>{
//    var largest = []
//    var seclargest = []
//    for(var i=0;i<arr.length;i++){
//       if(arr[i] > largest ){
//          largest = arr[i]
//       }
//    }
//    for(var i=0;i<arr.length;i++){
//       if(arr[i]>seclargest && arr[i]!=largest){
//          seclargest=arr[i]
//       }
//    }
//    console.log(seclargest)
// }
// var arr = [12,2,34,56,7,23]
// large(arr)

// 10. check if an array is sorted

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

//8. remove duplicate elements from array

const dupli = (arr)=>{
   var oldarray = []
   for(var i=0; i<arr.length;i++){ 
     if(arr[i]!=arr[i+1]){
        oldarray.push(arr[i])
     }
   }
   console.log(oldarray)

}
var arr = [1,2,3,3,4,5,5]
dupli(arr)
// console.log(duplicate)




//practise
// const dup = (arr)=>{
//    var newarr = []
//   for(var i=0; i<arr.length;i++){
//    if(arr[i]!=arr[i+1]){
//       newarr.push(arr[i])
//    }
//   }
//   console.log(newarr)
// }
// var arr = [1,2,2,3,4,4,5,5,5]
// dup(arr)


// const reverse = (arr)=>{
//    var newarr = []
//   for(var i=arr.length-1;i>=0;i--){
//       newarr.push(arr[i])
//       // newarr[arr.length-i-1] = arr[i] //7,6,5,1,2,3
//              //       6-5-1 = 0 on 0 th index add 7
//              //       6-4-1 = 1 on 1 th index add 6
//   }          //       6-3-1 = 2 on 2 th index add 5
//              //       6-2-1 = 3 on 3 th index add 1
//              //       6-1-1 = 4 on 4 th index add 2
//              //       6-0-1 = 5 on 1 th index add 3
//   console.log(newarr) //[7,6,5,1,2]
// }
// var arr = [2,3,1,5,6,7]
// reverse(arr)

// var arr = [1, 2, 3, 4, 5]

// methods to add element in array
// arr.unshift(2,1,2) //unshift method adds a new element at the start of the array
// arr.push(2,1,2)  //push method adds a new element at the end of the array

// methods to remove element from an array
// arr.shift() //shift method removes the last element of the array
// arr.pop()  //pop method removes the last element of the array

// method to copy pertiular part of the array in a new arr
// var newarr = arr.slice(1,3) //return the elements from index 1 to index 4

//removes an element from an array by accepting its index
// arr.splice(1,3) // returs the removed elements acccording to index

// console.log(arr)
// console.log(newarr)

//map method
// var arr = [1,2,3,4,5,6]
// arr.map((data)=> {
//    if(data%2==0){
//       console.log(data)
//    }
// //    var ndata = data * 2
// //    console.log(ndata)
// })

// console.log(newarr)

//For each
// var arr =  [1,2,3,4,5]
// const func1 = ()=>{
// var arrnew = arr.forEach((data)=> {
//    if(data%2==0){
//       console.log(`${data} is even`)
//    }
//    else{
//       console.log(`${data} is odd`)
//    }
// })
// }
// func1()
// console.log(arr)

// filter
// var arr = [1,2,3,56,23,45,10,8,4]
// var filarr = arr.filter((data)=>{
//     if(data>10){
//         console.log(data)
//     }
// })

// var arr = [1,2,3,56,23,45,10,8,4]
// var filarr = arr.filter((data)=> data>10)
// console.log(filarr)

//reduce method
// var arr = [1,2,3]
// var initialvalue = 5
// var add = arr.reduce((a,cv)=>console.log(a,cv))
// console.log(add)


//find
// var arr = [1,2,3]
// arr.find((data)=>{
//    if(data>1){
//     console.log(data)
//    }
// })

// var newarr = arr.find((data)=>data>1)
// console.log(newarr)

//findIndex method
// var arr = [1,2,3,4,5]
// const newarr= (data=>data>2)
// console.log(arr.findIndex(newarr))



// sorting an array
// var arr =[23,45,1,4,2,5,17,28]
// for(var i=0;i<arr.length-1;i++){
//     for(var j=0;j<arr.length-i-1;j++){
//          if(arr[j]<arr[j+1]){
//             let temp = arr[j]
//             arr[j]= arr[j+1]
//             arr[j+1]= temp
//          }
//     }
// }
// console.log(arr)