const login = document.querySelector('#login');
const email = document.querySelector('#email');
const tel = document.querySelector('#tel')

const button = document.querySelector('.btn')
const t = document.querySelector('#tbody')




form.addEventListener('submit', function(event){
    event.preventDefault();
   let arr = [{'login':login.value, 'email':email.value, 'tel': tel.value}];


    arr.forEach(function(tek, index){
            t.insertAdjacentHTML('beforeend', '<tr>'+'<th>'+ ++index +'</th>' + '<th>' +tek.login + '</th>' + '<th>' + tek.email + '</th>' + '<th>' + tek.tel +'</th>'+"</tr>" )
    })
})        




// // function solution(str){
// //     let str1 = str.split('').reverse().join('');
// //     return String(str1)
// // }
// console.log(solution("world"))


// function addLength(str) {

    
//     function addLength(str) {
//         return str.split(' ').map(n => n + " "+ n.length)
//        }

// }

// console.log(addLength("apple ban"))



// function booleanToString(b){
//     let v = b
//     console.log(v)
//     v = String(v)
//     console.log(v)
// }

// booleanToString(true)



// function findMultiples(integer, limit) {
//     let a = integer
//     let b = limit 
//     let arr = [];
//     for(i = a; i<= b; i++){
//         if(i % a == 0 && i % a != 1){
//             arr.push(i)
//         }

//   }
//   console.log(arr)
// }
// findMultiples(4, 27)


// function mystery() {
//     let results = {sanity: 'Hello'};
    
//     return results;
//   }

// // mystery()

// function reverseWords(str){
//     var reverse = [];
//     var words = str.split(" ");
//     for(let i=words.length-1; i>=0; i--){
//       reverse.push(words[i]);
      
//     }
//     return reverse.join(" ")
//   }

//   console.log(reverseWords('adfaf asdada adgadg' ))


// function mango(quantity, price){

//       return (quantity - Math.floor(quantity / 3)) * price
// }   

// console.log(mango(9,5))
// console.log(Math.floor(13 / 2))

// function removeExclamationMarks(s) {
//     let str = s.split('')  
//         for(let i = 0; i < str.length; i++){
//             if(str[i] == "!"){
//             str[i] = '';
            
//         } 
//     }
    
//     return str.join('');
// }
// console.log(removeExclamationMarks("Hello World!"))


// function invert(array) {
//     for(i = 0; i < array.length; i++){
//         if(array[i] >= 0){
//              array[i] = -Math.abs(array[i]);
//         }
//         else if (array[i] <= 0){
//             array[i] = Math.abs(array[i]);
//         }
//         else{
//             return [];
//         }
//     }
//     return array;
//  }

// console.log(invert([0]))

// function repeatStr (n, s) {
//     let str = '';
//     for(i = 0; i <= n; i++){
//         str += s
//     }

//     return str;
//   }

// console.log(repeatStr(3, "e"))


// let n = 1;
// let s = "e";

// for(i = n; i <= s; i++){
//     console.log(s)
// }