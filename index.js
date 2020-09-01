//Program to search for a particular character in a string
var name ='Lets Upgrade'
var searchLetter= prompt('Enter a letter to search from word "Lets Upgrade" ');
var n=name.indexOf(searchLetter);
var data1=`The searching Letter '${searchLetter}' present at index:${n} in the word "${name}"`
document.getElementById('demo').innerHTML=data1;
console.log(data1);
//Program to convert minutes to seconds 

var minute=prompt("Enter Minutes to converts in Seconds");

var convertedSeconds = minute*60;
var data=`given minutes are ${minute} and converted in ${convertedSeconds} seconds`;
document.getElementById('seconds').innerHTML=data;
console.log(data)

//Program to search for a element in a array of strings
var names=['letsUpgrade','javascript','aws','python']

var searchName= prompt("search element  among 'letsUpgrade','javascript','aws','python' ");
var i=names.indexOf(searchName);
var data3=`given word '${searchName}' presented at index : ${i} in the array of elements [ ${names} ]`

document.getElementById('searchName').innerHTML=data3;
console.log(data3)

//4.Program to display only elements containing 'a' in them from a array

// var data=['letsUpgrade','javascript','aws','python','venkat','koti']
// var data4=searchaword(data);
// function searchaword(data){
//   var data2=[];
//      for(let i=0;i<6;i++){
//           var element=data(i);
//        for(let k=0;k<length(element);k++){
//           if('a'==element[i]){
//             data2.push(element);
//           }
//        }
//      }
//      return data2;
// }


// document.getElementById('searchaword').innerHTML=data4;

//Print an array in reverse order
var arr=[1,2,3,4];
   var data5=arr.reverse();
    //  
 document.getElementById('reverse').innerHTML=data5;
   console.log(data5);
    

