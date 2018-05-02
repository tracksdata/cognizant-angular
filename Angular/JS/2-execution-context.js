/*

Exexcution Context
-------------------

Memory/stack frame with given arguments & locals to execute instaructions in a sequence

Phases:

Phase-1: context-creation /push

=> any veriable declared with 'var' keyword any-where in the contex , will get hosited/lifted up to top
   with default-value (undefined)

   Phase-2: context-execution/pop
   ==> instructions will get executed in a sequnce mannger

   ------------------------------------------------------------------------------

   imp-notes

   by defalt,
   ==> every .js-runtime has one global context /global scope
   ==> global context always executed by global object

   global objects
   ---------------
   brower-envi  ==> 'window'
   Node.js      ==> 'process'

   ---------------------------------------------------------------------------

   every function-invocation also creates new-context, which is child context of
   in-which context that function has declared

   ---------------------------------------------------------------------------

   best-practice: always declare variables at the top (blobal | function)

*/

//-------------------------------------------------------------------

//console.log(v);
//var v=12;

//---------------------------------------------------------------------

//var v=12

//function f1(){ // Defination
  //  console.log(v);
  //  v=13;
//}

//f1(); // f1 context  <----- global context


//----------------------------------------------------------------

// Quiz

//var v=12; // global context
//function f1(){
   
    // no local variable in f1 function. 
  //  function f2(){
    //    console.log(this.v);
  //  }
    //f2(); // f2-context <--- f1-context
    //var v=13;
//}
//f1(); // f1-context  <---- global context

//----------------------------------------------------------------

/*
Problems with var keyword

==> vatiable always get hoist
==> we can reclare the variable multiple times with in the context 
==> no block scope to variable(s) with in the context. i.e by defalt variables can be in global scope/ function scope
*/

//console.log(v);
//let v=123; 

//var v=10;
//var v=12;


//let v=10;// ES-6 feature
//let v=20; // Error

//f1();

//function f1(){ //  denation style -> always shoist top of the context  <----- global
  //  console.log('Hello f1');
//}

f1(); // error
// literal style
var f1=function(){ // literal style  <--- willl not hoist to the global context
    console.log('Hello f1');
}


// Note: Best practice: Avoid usage of 'var' keyword

//-----------------------------------------------------------------


