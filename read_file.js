var fs = require("fs");

var fileName = process.argv.slice(2);

//console.log(fileName + ", " + fileName.length);


fs.readFile(fileName[0], (err, data) => {
  if(err) {
    console.log(err);
  }

  console.log("Reading file", fileName[0]);
  console.log(data.toString());
});