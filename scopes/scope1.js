
// any variable declared outside of a function belongs to the global scope

// Ex 1
// Will this break?
function child(){
  console.log(test);
}
function parent(){
  const test = "okay";
  child();
}
// parent();


// Ex 2
// Currently, JavaScript, unlike many other languages,
// does not support block level scoping.
// This means that declaring a variable inside of a block structure
// like a for loop, does not restrict that variable to the loop.
// Instead, the variable will be accessible from the entire function.
// It’s worth noting that the upcoming ECMAScript 6 will support
// block level scopes via the let keyword.

function blockEx1(){
  [1,2,3].forEach((element) => {
    //element + element;
    const obj = 4;
  });
  console.log(obj);
}
//blockEx1();

// EX3
function blockEx2(){
  for(let i = 0; i < 5; i += 1){
    let obj = 4;
  };
  console.log(obj);
}
blockEx2();



