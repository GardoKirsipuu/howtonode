var fs = require('fs');

fs.writeFile('mynewfile3.txt', 'See on minu text', function (err) {
  if (err) throw err;
  console.log('Replaced!');
});