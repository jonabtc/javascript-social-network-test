const calculateDistanceBetweenUsers = require('.');

var myArgs = process.argv.slice(2);
var userStart = myArgs[0];
var userEnd = myArgs[1];

calculateDistanceBetweenUsers(userStart, userEnd).then((distance) => {
  console.log(
    "Distancia entre '" + userStart + "' y '" + userEnd + "', es: " + distance
  );
});
