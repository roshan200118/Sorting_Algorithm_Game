const getInt = require("../util/getRandNum.js"); // Generates a random int

// Sets the algorithm array with size based on the level
const getArr = function (req, res, next) {
  console.log("-> Getting Level Array:");

  let maxNum;
  let arrLen;
  let arr = [];

  switch (req.params.lvl) {
    case "5":
      maxNum = 100;
      arrLen = 50;
      break;
    case "4":
      maxNum = 50;
      arrLen = 20;
      break;
    default:
      maxNum = 20;
      arrLen = 10;
      break;
  }

  for (let i = 0; i < arrLen; i++) {
    arr.push(getInt(maxNum));
  }

  // STores the algorithm array as a cookie 
  res.clearCookie("algArr");
  res.cookie("algArr", [arr]);
  req.body.algArr = arr;

  console.log("* Getting Level Array: Success");

  next();
};

module.exports = {
  getArr,
};
