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
function changeImage1(){
    const change=document.getElementById('image');
    const newUrl="https://pbs.twimg.com/profile_images/1250978089997393922/AfVVOKcB.jpg";
   
    change.src=newUrl;
  }
  function defaultImage(){
    const change=document.getElementById('image');
    const newUrl="https://3.bp.blogspot.com/-RgRq4imEpOI/WacIKXOJP4I/AAAAAAAABBw/DX3evXQtQTUAvZluPC2UEEHE0jq6VeWMwCEwYBhgL/s1600/IMG_20170829_211128.jpg";
   
    change.src=newUrl;
  }

  function getName(){
    let nameinput=document.getElementsByClassName('input');
    // console.log(nameinput[0].value)
    nameinput[1].value=nameinput[0].value;
    // console.log(nameinput[1].value)
  }
  // name (string), age (number), country (string), hobbies array (string [ ] )
  persons=[
    {
      name: "Venkat",
      age:22,
      country:"India",
      hobbies: [
        "Playing chess", "doing web projects" ,"playing Hocky"
      ]
    },
    {
      name: "Neha",
      age:27,
      country:"America",
      hobbies: [
        "Tech Talks", "watching movies" ,"playing Video games","Kindle reading"
      ]
    },
    {
      name: "Srinu",
      age:26,
      country:"Chicago",
      hobbies: [
        "watching movies" ,"Reading Books","Cricket"
      ]
    },
    {
      name: "Anand",
      age:26,
      country:"England",
      hobbies: [
        "Listening to music","playing Video games","cards"
      ]
    },
    {
      name: "Prasad",
      age:19,
      country:"Gana",
      hobbies: [
        "Eating variety food","playing Video games","Cricket"
      ]
    },
    {
      name: "Varaprasad",
      age:49,
      country:"India",
      hobbies: [
        "Bible Reading","Preaching","free advices"
      ]
    },
    {
      name: "Sujatha",
      age:45,
      country:"India",
      hobbies: [
        "Bible Reading","listening to music","Help"
      ]
    }
  ]
   persons.forEach(element => {
     console.log(`Name:${element.name} ,Age:${element.age}, Country:${element.country},\n Hobbies:${element.hobbies}`)
   });
   console.log("Age<30 persons data\n" )
   function ageLessthan30(persons){
    persons.forEach(element => {
      if(element.age<30){
       console.log(`Name:${element.name} ,Age:${element.age}, Country:${element.country},\n Hobbies:${element.hobbies}`)}
       });
   }
   function countryIndia(persons){
    persons.forEach(element => {
      if(element.country=="India"){
       console.log(`Name:${element.name} ,Age:${element.age}, Country:${element.country},\n Hobbies:${element.hobbies}`)}
       });
   }
   