// Which one will work or do they both work or do neither work?

funcDeclaration();
function funcDeclaration() {
  console.log("Ready");
}


funcExpression();

let funcExpression = () => {
  console.log("Expression");
};

