let test = "I'm global";

function testScope() {
  test = "I'm local"; // What happens when I remove let?

  console.log (test);
}

testScope();           // output: I'm local

console.log(test);     // output: I'm global

