var itemList=document.querySelector('#items');
console.log(itemList.parentNode);
console.log(itemList.parentNode.parentNode);
console.log(itemList.parentElement);
console.log(itemList.parentElement.parentElement.parentElement);
console.log(itemList.children);
console.log(itemList.firstChild);
console.log(itemList.firstElementChild);
itemList.firstElementChild.textContent='hello1';
console.log(itemList.lastElementChild);
itemList.lastElementChild.textContent='hello4';
console.log(itemList.lastChild);
console.log(itemList.nextSibling);
console.log(itemList.nextElementSibling);
console.log(itemList.previousSibling);
console.log(itemList.previousElementSibling);
itemList.previousElementSibling.style.color='green';

//createelement
//create a div 
var newDiv=document.createElement('div');
//add classname
newDiv.className='hello';
//add id
newDiv.id='hello1';
//add attribute
newDiv.setAttribute('title','Hello Div');
//create text node
var newDivText=document.createTextNode('Hello world');
//add text to div
newDiv.appendChild(newDivText);
var container=document.querySelector('header .container');
var h1=document.querySelector('header h1');
console.log(newDiv);
container.insertBefore(newDiv, h1);

var newDiv2=document.createElement('div');
newDiv2.className='Hello';
newDiv2.id='hello2';
newDiv2.setAttribute('title','hello div2');
var newDivText2=document.createTextNode('HELLO WORLD');
newDiv2.appendChild(newDivText2);
var items=document.querySelector('ul .list-group-item');
var li=document.querySelector('ul li');
console.log(newDiv2);
items.insertBefore(newDiv2,li[0]);