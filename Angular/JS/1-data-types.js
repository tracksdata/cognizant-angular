/*

.js data-types
----------------
1. simple/primitive  ==> values
    a. string
    b. number
    c. boolean
    d. undefined
2. Complex/reference types ==> Objects

*/

//---------------------------------------------------------
// 1. Simple/Primitivetypes ==> Values
//---------------------------------------------------------

// a. string

var name='Praveen';
var selection="Abc";

//var dynamicString="The Value is "+(2+2);
//var multiLineString= "Hello How are you "+
//                     " I am doing good";

// from ES-6 ==> String interpolation

var dynamicString= `The value is ${20+20}`
var multiLineString = `
<div>
    <h1> ${10+10} </h1>
</div>
`
//---------------------------------------------------------

//b. number
var count=12;
var cost=12.45;

//-----------------------------------------------------------

// c. boolean 

var found=false;
/*
    // Imp-note : falsy values in .js langauge

    ==> false, 0, "" , null, undefined , NAN

*/

//-----------------------------------------------------------
// d. undefined
var v;

//-----------------------------------------------------------
// 2. Complex/ference  => Objects
//-----------------------------------------------------------

/*

how  to create objects in .js language?

syntz:
var ref=new Constructor();

imp-note: all constructor function(s) must have 'pascal' naming convension

by default,
-> all objects are extensible and configurable

*/


// Imp-Note: Every function in .js language is a object
//var config=new Object();
//config.url='http://www.google.com';
//config.httpMmethod='GET'; 
//config.success=function(){
//    console.log('Doing something on success...')
//}

//delete config.httpMmethod;

//------------------------------------------
// literal style object(s)
//------------------------------------------

// a. Object

//var config={
  //  url:'http://abc.com',
  //  httpMethod:'GET',
  //  success:function(){
  //      console.log('Doing something on success...');
  //  }
//};

//-------------------------------------------

// Arrays

/*
array/list:
-----------
    -> can hold any type of element(s)
    -> size can grow dynamically

*/


//var arr=new Array();
//arr.push('item1');
//arr.push('item2');
//arr.push('item3');


//or

//var arr=["item1","item2","item3"];
//arr.push('item4');

//-----------------------------------------------------

// RegExp  ==> for pattern matching

var adharPattern=new RegExp("\\d{4}-\\d{4}-\\d{4}");
var isValid=adharPattern.test("1234-5678-7658");

//-----------------------------------------------------

// Function

// Every function in .js is 'Object'

//var add=new Function("n1","n2","var result=n1+n2;return result");

// or literal style
function add(n1,n2){
    var result=n1+n2;
    return result;
}

//-----------------------------------------------------

// How  to access objects's properties?

/*
    2 ways

    way-1 : using '.' nootation is property name is  valid identifier
    else
    way-2 : using '[]' notation
*/

var person={
name:'Praveen',
'home-address':'Hyderabad'
};

person.name='Bucky'; // set
console.log(person.name); // get

person["home-address"]='Bangalore'; 
console.log(person["home-address"]);

//----------------------------------------------

























































