module.exports = function check(str, bracketsConfig) {

  let OPEN_BRACKETS_ARRAY = [];
  let BRACKETS_OBG = {}

  for(let i =0; i< bracketsConfig.length; i++){
    OPEN_BRACKETS_ARRAY.push(bracketsConfig[i][0]);
    BRACKETS_OBG[bracketsConfig[i][1]] = bracketsConfig[i][0];
  }

  let stack = [];

  for (let i = 0; i < str.length; i++) {

    let currentBracket = str[i];

    if(OPEN_BRACKETS_ARRAY.includes(currentBracket)) {
      stack.push(currentBracket);
    }
    else {
      if(stack.length === 0) {
        console.log("tut1");
          return false;
      }

      let upperElement = stack[stack.length - 1];

      if(BRACKETS_OBG[currentBracket] === upperElement) {
        stack.pop();
      } 
      else {
        console.log("tut2");
        return false;
      }
    }
  }
  console.log("tut3");
  return stack.length === 0;
}
