// const names= document.getElementsByTagName("p");
// console.log(names[]);
// const person=document.getElementsByClassName("name");
// console.log(person)
// const person =document.getElementById('pname')
// console.log(person)
// const para= document.querySelectorAll('.name')
// console.log(para)
function doSomething(){
  console.log("hello")
  const para= document.querySelectorAll('.name')
  para[0].innerText="<h1>Hi All this is red</h1>"
  para[1].innerHTML="<h1>Hi there signing off</h1>"
}
  function changeImage(){
    const change=document.getElementById('image');
    const newUrl="https://2.bp.blogspot.com/-nx35QoQDHJg/WacID5HS93I/AAAAAAAABBs/kfH3Yzo388wUdOBiMhYL0oryb_IFLsjMACEwYBhgL/s320/IMG_20170830_085210.jpg";
   
    change.src=newUrl;
  }
  function getName(){
    const name=document.getElementById('gname');
    const nameinput=document.getElementsByClassName('inputClass');
    console.log(name);
    console.log(nameinput[0].value);
  }