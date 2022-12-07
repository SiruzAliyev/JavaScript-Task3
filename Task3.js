// 1. Find the minimum element of this array
// 2. Find the maximum element of this array
// 3. Find the index of the minimum element of this array
// 4. Find the index of the maximum element of this array
// 5. Calculate the sum of array's elements with odd indices
// 6. Reverse this array (array in reverse direction) - you have to create YOUR OWN function, which WILL NOT create any new array
// 7. Count the number of odd elements in the array
// 8. Swap the first and second half of the array, for example, for an array of 1234, the result is 3412, or for 12345 the result will be 45312.
// 9. Sort the array in ascending order in one of the following ways: bubble sort, selection sort or insertion sort.
// 10. Sort the array in descending order in one of the ways (different from the method taken in the 9th task): bubble sort, selection sort or insertion sort.


// Let's say you have an array of arbitrary size filled with random numbers (one array per task). You need to:

// Task3.1

// let array = [44,83,1,14,9];
// let min = array[0];
// for (let i = 0; i < array.length; i++){
//     if (array[i] < min ) {
//         min = array[i];
//     }
// }
// console.log(min);



// Task3.2

// let array = [44,83,1,14,9];
// let max = array[0];
// for (let i = 0; i < array.length; i++){ 
//     if (array[i] > max ) {
//         max = array[i];
//     }
// }
// console.log(max);



// Task3.3

// let array = [44,83,1,14,9];
// let min =array[0];
// let index = 0;
// for (let i = 0; i < array.length; i++){
//     if (array[i] < min ) {
//         min = array[i];
//         index = i;    
//     }
// }
// console.log(index);



// Task3.4

// let array = [44,83,1,14,9];
// let max =array[0];
// let index = 0;
// for (let i = 0; i < array.length; i++){
//     if (array[i] > max ) {
//         max = array[i];
//         index = i;    
//     }
// }
// console.log(index);



// Task3.5

// let array = [44,83,1,14,9];
// let sum = 0;
// for (let i = 0; i < array.length; i++) {
//    if (array[i] % 2 != 0) {
//     sum = sum + array[i];
//    }
// }
// console.log(sum);



// Task3.6

// let reverse = (a) =>{
//     return a.reverse();
// }
// console.log(reverse(a));




// Task3.7

// let array = [44,83,1,14,9];
// let count=0;
// for (let i = 0; i < array.length; i++) {
//    if (array[i] % 2 !=0 ) {
//    count = count + 1
//    }
// }
// console.log(count);



// Task3.8

// let array = [44,83,1,14,9];
// console.log(array)
// let swap;
// let array1;
// let array2;
// swap = array.length / 2
// array1 = array.slice(0, swap)
// array2 = arr.slice(swap, array.length)
// array = [array2 + array1]
// console.log(array)



// Task3.9

// let array = [44,83,1,14,9];
// for (i=0; i<array.length; i++){
//     for(j=i; j<array.length; j++) {
//         if(array[i]>array[j]) {
//             temp=array[i];
//             array[i]=array[j];
//             array[j]=temp;
//         }
//     }
// }
// console.log(array);



// Task3.10

// let array = [44,83,1,14,9];
// for (let i = 0; i < array.length; i++) {
//     for (let j = 0; j < array.length - i - 1; j++) {
//         if (array[j] < array[j + 1]) {
//             let temp = array[j]
//             array[j] = array[j + 1]
//             array[j + 1] = temp
//         }
//     }
// }
// console.log(array);

